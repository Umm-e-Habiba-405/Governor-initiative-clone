import React from 'react'
import Image from 'next/image'
const Courses = () => {
  return (
   
    <div className="courses-container">
    <h2 className="courses-title font-bold  mx-6 my-6 text-3xl text-[#044E83]">Core Courses Sequence</h2>
    <div className="courses-grid flex gap-5 px-9 ">
      <div className="course-card">
      <Image
        src="/programming_fundamentals.49cca4e9.jpg"
        alt={"hero3"}
        height={400}
        width={500}
        className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
      ></Image>
        <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px] '>Programming Fundamentals</h3>
      </div>
      <div className="course-card">
      <Image
        src="/nextjs.3dff0f70.jpg"
        alt={"hero3"}
        height={400}
        width={500}
        className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
      ></Image>
        <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Web2 Using NextJS</h3>
      </div>
      <div className="course-card">
      <Image
        src="/earn_as_your_learn.b8248a49.jpg"
        alt={"hero3"}
        height={400}
        width={500}
        className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
      ></Image>
        <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Earn as You Learn</h3>
      </div>
    </div>
  </div>
  

  )
}

export default Courses
