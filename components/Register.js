import React, { useState, useEffect } from "react";
import { Image } from "next/image";
import toast from "react-hot-toast";
import { setDoc, db, doc } from "../utils/firebase";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";
import { useRouter } from "next/router";

const Register = () => {
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
    number: "",
    email: "",
  });

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const myFunction = async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
  };

  useEffect(() => {
    myFunction();
  });

  const onRegister = () => {
    if (!state.Fname || !state.Lname || !state.number || !state.email) {
      toast.error("Please fill all the fields");
    } else {
      setDoc(
        doc(db, "users", walletAddress),
        {
          Fname: state.Fname,
          Lname: state.Lname,
          number: state.number,
          email: state.email,
        },
        { merge: true }
      );
      toast.success("Registered Successfully");
      router.push("/");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body space-y-3">
              <div className="flex space-x-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={state.Fname}
                    onChange={(e) =>
                      setState({ ...state, Fname: e.target.value })
                    }
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={state.Lname}
                    onChange={(e) =>
                      setState({ ...state, Lname: e.target.value })
                    }
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="E-mail"
                    value={state.email}
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={state.number}
                    onChange={(e) =>
                      setState({ ...state, number: e.target.value })
                    }
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  disabled={!walletAddress}
                  onClick={onRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
