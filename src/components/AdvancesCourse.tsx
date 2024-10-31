import React from 'react'
import Image from 'next/image'
const AdvancesCourse = () => {
  return (
    <div>
      <div>
       <div className="AdvaneCourses-container  ">
      <h1 className="AdvanceCourses-title font-bold mx-6 my-6 text-3xl text-[#044E83]   ">Advanced Courses</h1>
      <div className="AdvanceCourses-grid  space-x-10 px-9 grid grid-cols-4 gap-4  ">
        <div className="AdvanceCourse-card ">
        <Image
          src="/Artifical Intelligence.jpg"
          alt="" 
          height={400}
          width={600}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Artifical Intelligence</h3>
        </div>
        <div className="course-card">
        <Image
          src="/metaverse.jpg"
          alt={"hero3"}
          height={400}
          width={500}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Web 3 And Metaverse</h3>
        </div>
        <div className="course-card">
        <Image
          src="/automation.jpg"
          alt={"hero3"}
          height={400}
          width={500}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>ECloud-Native Computing</h3>
        </div>
        <div className="AdvanceCourse-card ">
        <Image
          src="/cloudComputing.jpg"
          alt="" 
          height={400}
          width={500}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Ambient  Computing And IOT</h3>
        </div><div className="AdvanceCourse-card ">
        <Image
          src="/Ambient Computing.jpg"
          alt="" 
          height={400}
          width={500}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Genomics and Bioinformatics</h3>
        </div><div className="AdvanceCourse-card ">
        <Image
          src="/genomics.jpg"
          alt="" 
          height={400}
          width={500}
          className="rounded-tr-[8px] rounded-tl-[8px] w-full h-[200px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300 "
        ></Image>
          <h3 className='p-5 bg-slate-100 font-bold rounded-bl-[8px] rounded-br-[8px]'>Network Programmability And Automation</h3>
        </div>
      </div>
    </div>
    </div>  
    
    </div>
  )
}

export default AdvancesCourse
