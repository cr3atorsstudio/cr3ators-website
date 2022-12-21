import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";
import { mintNFT } from "../lib/mint";
import { CONTRACT_ADDRESS } from "../lib/constants";
import { ethers } from "ethers";
import abi from "../lib/CreatorsNFT.json";

const contractABI = abi.abi;

const Mint: NextPage = () => {
  const [mintContract, setContract] = useState<ethers.Contract | null>(null);
  const [num, setNum] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [error, setError] = useState("");
  const [supporterNftNum, setSupporterNftNum] = useState(0);
  const [creatorNftNum, setCreatorNftNum] = useState(0);

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

  useEffect(() => {
    if (mintContract) {
      getNftNum();
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

  const onMint = useCallback(
    async (currentNum: number) => {
      setError("");

      if (currentNum <= 0) {
        setError("Please enter a number greater than 0");
      }

      if (currentNum > 0 && mintContract) {
        await mintNFT(mintContract, currentNum, tokenId);
      }
    },
    [mintContract]
  );

  const onCreatorClick = useCallback(() => {
    setTokenId(0);
  }, []);

  const onSupporterClick = useCallback(() => {
    setTokenId(1);
  }, []);

  const increment = useCallback(() => {
    setNum((num) => num + 1);
    setError("");
  }, []);

  const decrement = useCallback(() => {
    setNum((num) => (num > 0 ? num - 1 : 0));
    setError("");
  }, []);

  return (
    <Layout>
      <main className="bg-white font-sans-serif ">
        <section className="flex h-screen flex-col">
          <h1 className="mt-16 text-center text-[64px] font-bold text-text-gray-900">
            Creators Studio NFT
          </h1>

          <div className="mx-auto mt-16 w-4/5 rounded-3xl bg-white p-6 drop-shadow-card">
            <h2 className="mt-5 mb-10 ml-10 text-4xl font-bold text-mint-subtitle">
              500 uniquely generated Creators Community NFT!
            </h2>
            <div className="flex items-center justify-between">
              <p className="ml-10 w-1/2 text-2xl leading-relaxed">
                The Creators Community NFT is a unique initiative that uses
                blockchain technology to raise awareness about gender inequality
                in web3 and increase the number of women and gender minorities
                to close the gender gap in web3. By minting the NFTs, we hope to
                generate funds that can be used to support gender equality
                initiatives.
              </p>
              <img
                className="mr-20 w-1/3"
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
          <div className="mx-auto flex w-4/5 justify-center ">
            <div className="mx-4 flex flex-col items-center">
              <p>Creator</p>
              <label htmlFor="creator" className="mb-1 ">
                <img
                  src="maru.png"
                  alt=""
                  className={`m-1 h-72 w-72 cursor-pointer drop-shadow-collection ${
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
                  className={`m-1 h-72 w-72 cursor-pointer drop-shadow-collection ${
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
            <div className="mt-12 flex items-center justify-center">
              <img
                src="minus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
                onClick={decrement}
              />
              <input
                type="number"
                id="number-input"
                className="mx-3 h-16 w-32 appearance-none rounded-md border border-black-purple p-1 text-center text-2xl font-bold"
                value={num}
                onChange={(e) => setNum(Number(e.currentTarget.value))}
                min={0}
              />
              <img
                src="plus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
                onClick={increment}
              />
            </div>
            <p className="text-red-500">{error}</p>
            <button
              className="mt-20 h-16 w-32 cursor-pointer rounded-full bg-mint-button font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={() => onMint(num)}
              disabled={error !== "" && true}
            >
              Mint
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Mint;
