import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Table from "../components/Table";

const Results = () => {
  const query = {
    name: "Chanakyha V",
    depAir: "Madras",
    desAir: "Bangkok",
    number: "7550148119",
    dateTime: "2022-05-28:19:25",
  };

  const [buySpace, setBuySpace] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="divider" />
      <div className="mt-5 flex flex-col md:flex-row justify-center w-full md:justify-start">
        <Stats
          dateTime={query.dateTime}
          query={query}
          buySpace={buySpace}
          setBuySpace={setBuySpace}
        />
        <div className="divider md:divider-horizontal" />
        <div className="flex flex-col items-center flex-1 space-y-5">
          <h1 className="font-bold text-5xl">Results</h1>
          <Table buySpace={buySpace} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
