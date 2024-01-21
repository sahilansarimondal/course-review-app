"use client";
import { useState } from "react";
import { images } from "./Banner";
export default function FeaturedPost() {
  const [activeFeaturedImage, setActiveFeatureImage] = useState(0);
  return (
    <div className=" w-full bg-gray-800 p-3">
      <h2 className=" text-yellow-500 text-3xl py-3 px-2 font-semibold">
        Featured Today
      </h2>
      <div className="flex relative ">
        <img
          className={`${
            activeFeaturedImage <= 0 ? "hidden" : "block"
          } absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-slate-100 border-[1px] hover:border-none h-16 w-12 py-5 px-3 rounded-md bg-opacity-30 ml-1 hover:bg-opacity-40`}
          src="/double-left.png"
          alt="leftbutton"
          onClick={() => {
            setActiveFeatureImage(activeFeaturedImage - 2);
          }}
        />
        {images.map((image, index) => {
          return (
            <div
              className={`w-full h-auto  ${
                activeFeaturedImage === index ||
                activeFeaturedImage + 1 == index
                  ? "block"
                  : "hidden"
              }`}
            >
              <img className={` p-2 `} src={image} alt="" />
            </div>
          );
        })}
        <img
          className={`${
            activeFeaturedImage >= images.length - 2 ? "hidden" : "block"
          } absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-slate-100 border-[1px] hover:border-none h-16 w-12 py-5 px-3 rounded-md bg-opacity-30 ml-1 hover:bg-opacity-40`}
          src="/double-right.png"
          alt="leftbutton"
          onClick={() => {
            setActiveFeatureImage(activeFeaturedImage + 2);
          }}
        />
      </div>
    </div>
  );
}
