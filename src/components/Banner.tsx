"use client";

import { useState } from "react";

export const images = [
  "https://i.ytimg.com/vi/l1EssrLxt7E/maxresdefault.jpg",
  "https://i.ytimg.com/vi/HVjjoMvutj4/maxresdefault.jpg",
  "https://i.ytimg.com/vi/R6RX2Zx96fE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC06aUubWmc0NPClPkrwcz_kUZrbA",
  "https://i.ytimg.com/vi/dx0F6Kwxnrg/maxresdefault.jpg",
  "https://i.ytimg.com/vi/TeZdo8mx0gc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4tP0U5Q3D4ra7buK5EdgOi1rovQ",
  "https://i.ytimg.com/vi/8c6kE5LKTMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJdEMYtqZHF0JFacQL19jddvmGTg",
];

export default function Banner() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="relative flex w-full lg:w-1/2">
        <img
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-slate-100 border-[1px] hover:border-none h-16 w-12 py-5 px-3 rounded-md bg-opacity-30 ml-1 hover:bg-opacity-40"
          src="/double-left.png"
          alt="leftbutton"
          onClick={() =>
            activeImageIndex <= 0
              ? setActiveImageIndex(images.length - 1)
              : setActiveImageIndex(activeImageIndex - 1)
          }
        />

        {images.map((img, index) => {
          return (
            <img
              key={img}
              className={`min-w-full h-auto ${
                activeImageIndex === index ? "block" : "hidden"
              }`}
              src={img}
              alt="banner"
            />
          );
        })}
        <img
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-slate-100 border-[1px] hover:border-none h-16 w-12 py-5 px-3 rounded-md bg-opacity-30 ml-1 hover:bg-opacity-40"
          src="/double-right.png"
          alt="leftbutton"
          onClick={() =>
            activeImageIndex >= images.length - 1
              ? setActiveImageIndex(0)
              : setActiveImageIndex(activeImageIndex + 1)
          }
        />
      </div>
    </div>
  );
}
