const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const {createAlchemyWeb3} = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../Smart Contract/artifacts/contracts/party.sol/Parties.json");
const contractAddress = "0xEB889a8D1ad0AF0407d4a1eE950E571ccB1f0C96";

export const partiesContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const connectWallet = async () => {

    if(window.ethereum){
        try{
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status : "👍 Wallet Connected",
                address : addressArray[0],
            };

            return obj;
        }
        catch(err){
            return{
                status: "😥 " + err.message,
                address: "",
            };
        }
    }
        else{
            return{
                address: "",
                status: "Please install Metamask",
                  
            };

        }

    };

    export const getCurrentWalletConnected = async () => {
        if (window.ethereum){
            try{
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                })
                if (addressArray.length > 0){
                    return{
                        status : "👍 Wallet Connected.",
                        address : addressArray[0],
                    };
                } else{
                    return{
                        status: "Please connect to Metamask 🦊.",
                        address: "",
                    };
                }
            }
            catch(err){
                return{
                    status: "😥 " + err.message,
                    address: "",
                };
            }
        }
            else{
                return{
                    address: "",
                    status: " 😔 Please install Metamask ",
                };
    
            }
      
    };

    export const createContract = async (txnno,address, weight,value) => {
    //input error handling
    if (!window.ethereum || address === null) {
      return {
        status:
          "💡 Connect your Metamask wallet.",
      };
    }
  
    if (weight.trim() === "") {
      return {
        status: "❌ Your weight cannot be an empty string.",
      };
    }
    const amt = parseInt(weight)*540000000000;
    //set up transaction parameters
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: address, // must match user's active address.
      value: amt,
      data: partiesContract.methods.addParty(txnno,address,parseInt(weight),parseInt(value)).encodeABI(),
    };
  
    //sign the transaction
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        status: `Success,${txHash}`,
      };
    } catch (error) {
      return {
        status: "😥 " + error.message,
      };
    }
  };

  