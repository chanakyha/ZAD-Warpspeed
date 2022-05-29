import React, { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SellerDetails from "../components/SellerDetails";
import Stats from "../components/Stats2";

const Providers = () => {
  const query = {
    flightNumber: "IND5960",
    airline: "Indigo",
    deptTime: "19:26",
    arrivalTime: "2:30",
    date: "28/05/2022",
  };

  const sampleProviders = [
    {
      id: 1,
      name: "Ragul S",
      space: "10",
    },
    {
      id: 2,
      name: "Prayasu",
      space: "12",
    },
    {
      id: 3,
      name: "Prasanna",
      space: "5",
    },
  ];

  const [displaySellerData, setDisplaySellerData] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="divider" />
      <div className="mt-5 items-start flex flex-col md:flex-row justify-center w-full md:justify-start">
        {displaySellerData ? <SellerDetails /> : <Stats query={query} />}
        <div className="divider md:divider-horizontal pb-7" />
        <div className="flex flex-col items-center flex-1 space-y-5">
          <h1 className="font-bold text-5xl">Providers</h1>
          <div className="overflow-scroll mb-3 grid md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-3">
            {sampleProviders.map((provider) => (
              <Card
                id={provider.id}
                name={provider.name}
                space={provider.space}
                setDisplaySellerData={setDisplaySellerData}
                displaySellerData={displaySellerData}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Providers;
