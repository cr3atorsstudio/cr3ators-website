import { ethers } from "ethers";

export const mintNFT = async (
  mintContract: ethers.Contract,
  num: number, // mintする個数
  tokenId: number
) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      await mintContract.mint(tokenId, num, {
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
