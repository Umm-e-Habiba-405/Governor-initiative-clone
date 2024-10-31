
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#ceced16c] mt-[100px]">
      <div className="flex justify-evenly h-[25rem] ">
        <ul className="mt-[90px] ">
          <p className="font-bold text-2xl underline leading-[2.5]">Core Courses</p>
          <a className="block leading-[2]">Programming Fundamentals</a>
          <a className="block leading-[2]">Web2 Using NextJS</a>
          <a className="block leading-[2]">Earn as You Learn</a>
        </ul>
        <ul className="mt-[90px] ">
          <p className="font-bold text-2xl underline leading-[2.5]">Advanced Courses</p>
          <a className="block leading-[2]  ">Web 3 and Metaverse</a>
          <a className="block leading-[2] ">Cloud-Native Computing</a>
          <a className="block leading-[2] ">
            Artificial Intell igence (AI) and Deep Learning
          </a>
          <a className="block leading-[2]">Ambient Computing and IoT</a>
          <a className="block leading-[2]">Genomics and Bioinformatics</a>
          <a className="block leading-[2]">Network Programmability and Automation</a>
        </ul>

{/* these links are not in working  */}
        <ul className="mt-[90px] ">
          <p className="font-bold text-2xl underline">Social Links</p>
          <ul className="flex gap-4">
            <Link href={"/"} className="a">
              <FaFacebook className="icon1 text-blue-700 bg-white  rounded-full inline-flex text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaYoutube className=" icon2  text-white p-1 bg-red-600 rounded-full inline-flex  text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="icon3  text-white bg-sky-500 p-1 rounded-full inline-flex   text-[28px]  " />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="icon4  text-white p-1 bg-pink-500 rounded-full inline-flex  text-[28px] " />
            </Link>
            <Link href={"/"}>
              <FaTiktok className="icon5  text-white rounded-full bg-black inline-flex p-1 text-[28px]  " />
            </Link>
          </ul>

          <div className="mt-5">
          {/* <Link href={"../link"} className=" inline-flex text-xl cursor-pointer">  education@governorsindh.com</Link> */}
            <a >
              <CiMail className="inline-flex text-2xl font-bold cursor-pointer"  />  education@governorsindh.com
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}
