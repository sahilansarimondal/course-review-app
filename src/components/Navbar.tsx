import Image from "next/image";
import { Button } from "./Button";
import SearchBar from "./SearchBar";
import getUserData from "@/lib/getUserData";

export default async function Navbar() {
  const session = await getUserData()
  console.log(session)
  return (
    <div className=" flex justify-between p-3 bg-slate-900 font-black text-black">
      <div className="flex ">
        <Image
          className="flex cursor-pointer rounded-md hover:bg-slate-800  p-2  lg:hidden"
          src={"/menu-icon.svg"}
          width={33}
          height={33}
          alt="menu"
        />
        <div
          className="flex cursor-pointer ml-2 mr-5 items-center justify-center h-8 w-16 bg-yellow-500 rounded-md
      "
        >
          <h2>YPCR</h2>
        </div>
        <div className="flex hover:bg-slate-800 cursor-pointer px-2 rounded-md">
          <Image
            className="hidden  mr-2 lg:block"
            src={"/menu-icon.svg"}
            width={20}
            height={20}
            alt="menu"
          />
          <p className="hidden text-white font-semibold lg:flex items-center">
            Menu
          </p>
        </div>
      </div>
      <SearchBar />
      <div className="flex items-center pr-2">
        <div className="md:hidden lg:hidden xl:hidden">
          <Image
            className="flex mr-5 "
            src={"/search-icon.svg"}
            width={24}
            height={24}
            alt="menu"
          />
        </div>
        <Button name={session? "login": "signin"} />
      </div>
    </div>
  );
}
