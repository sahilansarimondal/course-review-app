"use client";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className=" bg-white w-auto md:flex rounded-md hidden">
      <div
        onClick={() => alert("clicked")}
        className="flex cursor-pointer py-1 px-3 hover:bg-slate-200 hover:rounded-l-lg"
      >
        <p className="pr-2">All</p>
        <button>
          <Image
            alt="dorpdown"
            src={"/triangle-arrow-down.png"}
            width={"12"}
            height={"12"}
          ></Image>
        </button>
      </div>

      <input
        className=" font-normal px-3 focus:outline-none border-x-2"
        type="text"
        placeholder="Search Courses"
      />
      <button className="block hover:bg-green-100 hover:rounded-r-md">
        <Image
          className="flex mx-3 "
          src={"/search-icon-black.svg"}
          width={24}
          height={24}
          alt="menu"
        />
      </button>
    </div>
  );
}
