import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

export default function Home() {
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
    DepAir: "",
    DesAir: "",
    Number: "",
    DateTime: "",
  });

  const onSubmit = () => {
    console.log("Working");
    if (
      !state.Fname ||
      !state.Lname ||
      !state.DepAir ||
      !state.DesAir ||
      !state.Number ||
      !state.DateTime
    ) {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <div>
      <Head>
        <title>ZAD</title>
        <Modal
          id={"flight-info"}
          onSubmit={onSubmit}
          state={state}
          setState={setState}
        />
      </Head>
      <main>
        <Navbar />
        <Hero loginId={"flight-info"} />
      </main>
    </div>
  );
}
