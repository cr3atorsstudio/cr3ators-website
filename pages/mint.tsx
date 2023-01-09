import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { mintNFT } from "../lib/mint";
import { CONTRACT_ADDRESS } from "../lib/constants";
import { ethers } from "ethers";
import abi from "../lib/CreatorsNFT.json";
import Navbar from "../components/Navbar";
import { useAccount } from "wagmi";
import { Notification } from "../components/Notification";

const contractABI = abi.abi;

const Mint: NextPage = () => {
  const [mintContract, setContract] = useState<ethers.Contract | null>(null);
  const [tokenId, setTokenId] = useState(0);
  const [error, setError] = useState("");
  const [supporterNftNum, setSupporterNftNum] = useState(0);
  const [creatorNftNum, setCreatorNftNum] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [process, setProcess] = useState({ show: true, message: "" });
  const { address } = useAccount();

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();

      const creatorsNft = mintContract
        ? mintContract
        : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

      setContract(creatorsNft);
    } else {
      console.log("wallet is not connected");
    }
  }, []);

  const onMintComplete = () => {
    setProcess({
      show: true,
      message: "Mint has finished!",
    });

    setTimeout(() => {
      setProcess({ show: false, message: "" });
    }, 5000);
  };

  useEffect(() => {
    if (mintContract) {
      getNftNum();

      // TODO: Need to add event in the contract
      mintContract.on("NFTMinted", onMintComplete);

      return () => {
        mintContract.off("NFTMinted", onMintComplete);
      };
    }
  }, [mintContract]);

  const getNftNum = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const creatorsNft = mintContract
          ? mintContract
          : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

        const creator = await creatorsNft.balanceOf(CONTRACT_ADDRESS, 0);
        const supporter = await creatorsNft.balanceOf(CONTRACT_ADDRESS, 1);

        setSupporterNftNum(supporter.toNumber());
        setCreatorNftNum(creator.toNumber());
      } else {
        throw new Error("wallet is not connected");
      }
    } catch (error) {
      console.error(
        "Something went wrong while getting the number of NFT available"
      );
    }
  }, [mintContract]);

  const checkMint = useCallback(async () => {
    console.log(address);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const signer = provider.getSigner();
        const creatorsNft = mintContract
          ? mintContract
          : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

        const mintMapping = await creatorsNft.mintedTokens(address);
        if (mintMapping) {
          return true;
        } else {
          return false;
        }
      } else {
        throw new Error("This wallet has already minted the NFT");
      }
    } catch (error) {
      console.error("Something went wrong while checking mint history");
    }
  }, [mintContract]);

  const onMint = useCallback(async () => {
    try {
      setError("");
      setProcess({
        show: true,
        message: "Please approve in your wallet to proceed minting!",
      });
      const hasMinted = await checkMint();

      if (hasMinted) {
        setError("You have minted this NFT before");
        setProcess({ show: true, message: "You have minted this NFT before" });
        setLoading(false);

        return;
      }

      if (!hasMinted && mintContract) {
        await mintNFT(mintContract, tokenId);
        setProcess({ show: true, message: "Minting..." });
      }
    } catch (e) {
      console.error("Something went wrong while minting");
    }
  }, [mintContract]);

  const onCreatorClick = useCallback(() => {
    setTokenId(0);
  }, []);

  const onSupporterClick = useCallback(() => {
    setTokenId(1);
  }, []);

  const handleOnClickNotification = useCallback(() => {
    setProcess({ show: false, message: "" });
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white font-sans-serif ">
        <section className="flex h-screen flex-col">
          <h1 className="mt-16 text-center text-2xl font-bold text-text-gray-900 md:text-[64px]">
            Creators Studio NFT
          </h1>

          <div className="mx-auto mt-16 w-4/5 rounded-3xl bg-white p-6 drop-shadow-card">
            <h2 className="mt-5 mb-10 font-bold text-mint-subtitle md:ml-10 md:text-4xl">
              500 uniquely generated Creators Community NFT!
            </h2>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="leading-relaxed md:ml-10 md:w-1/2 md:text-2xl">
                The Creators Community NFT is a unique initiative that uses
                blockchain technology to raise awareness about gender inequality
                in web3 and increase the number of women and gender minorities
                to close the gender gap in web3.
              </p>
              <img
                className="md:mr-20 md:w-1/3"
                src="documents.png"
                alt="woman holding documents"
              />
            </div>
          </div>
        </section>

        <section className="h-screen bg-mint-purple p-1">
          <h2 className="mt-10 mb-16 text-center text-5xl font-bold text-mint-subtitle ">
            Collection
          </h2>
          <div className="mx-auto flex justify-center md:w-4/5 ">
            <div className="mx-4 flex flex-col items-center">
              <p>Creator</p>
              <label htmlFor="creator" className="mb-1 ">
                <img
                  src="maru.png"
                  alt=""
                  className={`m-1 cursor-pointer drop-shadow-collection md:h-72 md:w-72 ${
                    tokenId === 0 && "border-4 border-mint-subtitle"
                  }`}
                />
              </label>
              <input
                id="creator"
                type="radio"
                value=""
                name="default-radio"
                className="hidden"
                onClick={onCreatorClick}
              />
              <p>{creatorNftNum} available </p>
            </div>

            <div className="mx-4 flex flex-col items-center">
              <p>Suporter</p>
              <label htmlFor="supporter" className="mb-1">
                <img
                  src="shikaku.png"
                  alt=""
                  className={`m-1 cursor-pointer drop-shadow-collection md:h-72 md:w-72 ${
                    tokenId === 1 && "border-4 border-mint-subtitle"
                  }`}
                />
              </label>
              <input
                id="supporter"
                type="radio"
                value=""
                name="default-radio"
                className="hidden"
                min={0}
                onClick={onSupporterClick}
              />
              <p>{supporterNftNum} available </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-red-500">{error}</p>
            <button
              className="mt-20 h-16 w-32 cursor-pointer rounded-full bg-mint-button font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={() => onMint()}
              disabled={error !== ""}
            >
              Mint
            </button>
          </div>
          {process.show && (
            <Notification
              process={process}
              onClickAction={handleOnClickNotification}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Mint;
