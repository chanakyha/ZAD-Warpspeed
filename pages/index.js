import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState({
    Fname: "",
    Lname: "",
    DepAir: "",
    DesAir: "",
    Number: "",
    DateTime: "",
  });

  // const onSubmit = () => {
  //   if (
  //     !state.Fname ||
  //     !state.Lname ||
  //     !state.DepAir ||
  //     !state.DesAir ||
  //     !state.Number ||
  //     !state.DateTime
  //   ) {
  //     toast.error("Please fill all the fields");
  //   } else {
  //     router.push("/results");
  //   }
  // };
  return (
    <div>
      <Head>
        <title>ZAD</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Details state={state} setState={setState} />
      </main>
      <Footer />
    </div>
  );
}
