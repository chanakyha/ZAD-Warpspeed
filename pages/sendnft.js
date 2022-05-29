import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mintNFT } from "../utils/interactNFT";

const SendNFT = () => {
  const [otp, setOTP] = useState();
  const [val, setVal] = useState(10000);
  mintNFT("mintNFT", val);

  return (
    <div>
      <Navbar />
      <div className="divider" />
      <div className="mt-5 items-start flex flex-col md:flex-row justify-center w-full md:justify-start">
        <div className="flex flex-col items-center flex-1 space-y-5">
          <h1 className="font-bold text-5xl">NFT Requests</h1>
          <div class="m-5 p-5 card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">OTP Request</h2>
              <p>Please Enter the OTP: </p>
              <input
                type="number"
                class="input input-primary"
                placeholder="Enter Otp"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Submit OTP</button>
                <button class="btn btn-primary">MInt and Send NFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendNFT;
