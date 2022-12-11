import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";
import { mintNFT } from "../lib/mint";
import { useAccount, useProvider, useSigner, useContract } from "wagmi";
import { CONTRACT_ADDRESS } from "../constants/constants";
import { ethers } from "ethers";

const Mint: NextPage = () => {
  const [mintContract, setContract] = useState<ethers.Contract>();
  const [num, setNum] = useState(0);
  const [tokenId, setTokenId] = useState(0);

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();

      // TODO: Add contract address and abi
      const contract = mintContract
        ? mintContract
        : new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

      setContract(contract);
    } else {
      console.log("wallet is not connected");
    }
  }, []);

  useEffect(() => {
    const { address } = useAccount();

    if (address) {
    }
  }, []);

  const onMint = useCallback(async () => {
    if (mintContract && num > 0 && tokenId) {
      await mintNFT(mintContract, num, tokenId);
    }
  }, []);

  const onNumberChange = useCallback((input: string) => {
    const num = Number(input);
    if (num > 0) {
      setNum(num);
    }
  }, []);

  return (
    <Layout>
      <main className="bg-white">
        <section className="flex h-screen flex-col">
          <h1 className="mt-16 text-center font-sans-serif text-[64px] font-bold text-text-gray-900">
            Creators Studio NFT
          </h1>

          <div className="mx-auto mt-16 w-4/5 rounded-3xl bg-white p-6 drop-shadow-card">
            <h2 className="mt-5 mb-10 ml-10 font-sans-serif text-4xl font-bold text-mint-subtitle">
              xxxx uniquely generated XXXXX!
            </h2>
            <div className="flex items-center justify-between">
              <p className="ml-10 w-1/2 font-sans-serif text-2xl leading-relaxed">
                The Whalies Club is a collection of 4444 unique ERC-721 tokens
                stored on the Ethereum Blockchain. Non-sequentially minted and
                provably unique, each NFT comes with a full membership including
                functioning utility and an ever-growing community. There is a
                maximum of 10 Whalies per transaction; 30% of revenue goes to
                the DAO treasury.
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
          <h2 className="mt-10 mb-16 text-center font-sans-serif text-5xl font-bold text-mint-subtitle ">
            Collection Examples
          </h2>
          <div className="mx-auto flex w-2/3 justify-between">
            <img
              src="flower_1.png"
              alt=""
              className="h-80 w-80 drop-shadow-collection"
            />
            <img
              src="flower_2.png"
              alt=""
              className="h-80 w-80 drop-shadow-collection"
            />
            <img
              src="items.png"
              alt=""
              className="h-80 w-80 drop-shadow-collection"
            />
          </div>
          <p className="mt-20 text-center font-sans-serif text-3xl font-bold text-text-gray-900">
            500 / 500
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="mt-12 flex items-center justify-center">
              <img
                src="minus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
              />
              <input
                type="number"
                className="mx-3 h-16 w-32 rounded-md border border-black-purple p-1 text-center font-sans-serif text-2xl font-bold"
                onChange={(e) => onNumberChange(e.currentTarget.value)}
              />
              <img
                src="plus-button.png"
                alt=""
                className="h-12 w-12 cursor-pointer"
              />
            </div>
            <button
              className="mt-20 h-16 w-32 cursor-pointer rounded-full bg-mint-button font-sans-serif font-bold text-white"
              onClick={onMint}
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
