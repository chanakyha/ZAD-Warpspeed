import React from "react";
import Logo from "../assets/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ loginId }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col mx-5">
        <div className="animate-bounce md:w-1/2 lg:w-1/3 md:mb-10 border-solid">
          <Image src={Logo} />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Welcome Folks!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href="#secondSection" scroll={false}>
            <label htmlFor={loginId} className="btn btn-primary modal-button">
              Get Started
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
