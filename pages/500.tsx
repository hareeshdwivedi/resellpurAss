import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));

const Seo = dynamic(() => import("../components/Seo"));

const InternalServerError = () => {
  return (
    <>
      <Seo title="Internal server error" />
      <div className="container h-screen">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full h-72 relative">
            <Image
              src="/500/500.png"
              alt={"500"}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h2 className="text-3xl md:text-4.5xl tracking-wider mt-0 md:mt-10 leading-tight capitalize text-center font-bold">
            Internal Server Error
          </h2>
          <div className="mx-auto mt-10 mb-20 w-max">
            <Link href="/">
              <span className="bg-theme_green rounded-[10px] py-2 px-8 sm:px-6 uppercase font-light text-[color:white] text-xs sm:text-sm sm:mt-8 hover:bg-button_hover">
                Go to Homepage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternalServerError;

InternalServerError.getLayout = (page: NextPage) => {
  return <>{page}</>;
};
