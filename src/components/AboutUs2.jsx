import React from 'react';
import philosophy from '../assets/philosophy.png';
import bgpic from '../assets/aboutUsBg.png';



function AboutUs2() {
    return (
       <div className="py-20 px-7 bg-cover h-full bg-bg1" style={{ backgroundImage: `url(${bgpic})` }}>
         <h1 className=" mb-10 text-center text-3xl font-bold text-blue">Philosophy</h1>
         <h1 className=' mx-8 my-4 text-center text-3xl font-bold text-redish'>Our philosophy is to work with you to transform you and your ideas, to drive your own success, where and when you need it.
         </h1>
         <div className='grid grid-cols-2'>
            <div className=' ml-10 text-3xl tracking-wide text-start font-bold text-[#7587A4]'>
            <p className='mb-12 mt-16 '>
             The<span className='text-blue'> ModernSolnHub® </span>is a venture which is founded by IT Industry experts across the globe. 
            </p>
            <p className=''>
             <span className='text-blue'>ModernVate </span> ModernVate is a software which will provide a platform for young students to showcase their ideas, show their skills, and ask for tools, to uplift their ideas through the guidance of IT industrialists, business people, institutions, and organizations.
            </p>    
            </div>
            <div className=' pt-0 justify-self-center'>
               <img src={philosophy} alt="p" className='w-[35rem]'></img>
            </div>
         </div>

       </div>
    )
}

export default AboutUs2