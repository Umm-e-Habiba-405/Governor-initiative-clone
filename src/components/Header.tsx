

// export default Navbar
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
   <header className=" w-full" >
    <div className="fixed top-0  w-full flex justify-evenly items-center bg-[#044E83] text-white pt-5 pb-5" >
      <div className="absolute left-20 top-6  ">
        <Image src="/logo1.jpg" alt={"logo"} height={200} width={200} className="object-contain h-24 w-24" >
        </Image>
      </div>
        
        {/* i only applied routes on the pages , that is working */}
        
        <h1 className="font-bold text-xl ml-16">Tuition Free Education Program on Latest Technologies</h1>
        <ul className="flex gap-9">
          <Link href={""} className=" transform hover:scale-105 transition duration-300">Home</Link>
          <Link href={""} className="transform hover:scale-105 transition duration-300">Apply</Link>
          <Link href={"../jobs"} className="transform hover:scale-105 transition duration-300">Jobs</Link>
          <Link href={"../result"} className="transform hover:scale-105 transition duration-300">Result</Link>
          <Link href={""} className="transform hover:scale-105 transition duration-300">Courses</Link>
          </ul>
      </div>

   </header>
      
  );
};