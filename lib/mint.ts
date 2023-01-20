import { ethers } from "ethers";

export const mintNFT = async (
  mintContract: ethers.Contract,
  tokenId: number
) => {
  try {
    console.log("mint NFT tokenId");
    console.log(tokenId);
    const { ethereum } = window;
    if (ethereum) {
      await mintContract.mint(tokenId, 1, {
        gasLimit: 300000,
      });

      return true;
    } else {
      console.log("wallet is not connected");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
