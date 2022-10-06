// import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline';
// import bgImg from '../assets/loginBg.png';
// const features = [
//     {
//         name: 'Connect with experts all over the world',
//         description:
//             'We provide newbies to connect with experts all over the world. Now connecting with the experts will be just one click away.',
//         icon: GlobeAltIcon,
//     },
//     {
//         name: 'Funding for your next big idea',
//         description:
//             'You share your idea, if your idea attracts any organization they can help you by providing funds or guidance.',
//         icon: ScaleIcon,
//     },
//     {
//         name: 'Get your business off the ground',
//         description:
//             'We promise to give a kickstart to your business by providing guidance from the experts.',
//         icon: BoltIcon,
//     },
//     {
//         name: 'Connect with other entrepreneurs',
//         description:
//             'You can also connect with other entrepreneurs for the purpose of gaining experience, guidance, etc.',
//         icon: ChatBubbleBottomCenterTextIcon,
//     },
// ]

// export default function Features() {
//     return (
//         <div className="bg-cover h-screen py-12" style={{ backgroundImage: `url(${bgImg})` }}>
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="lg:text-center">
//                     <p className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
//                         Features
//                     </p>
//                     <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                         We provide following features
//                     </p>
//                 </div>

//                 <div className="mt-10">
//                     <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
//                         {features.map((feature) => (
//                             <div key={feature.name} className="relative">
//                                 <dt>
//                                     <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
//                                         <feature.icon className="h-6 w-6" aria-hidden="true" />
//                                     </div>
//                                     <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
//                                 </dt>
//                                 <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
//                             </div>
//                         ))}
//                     </dl>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from "react";
import "../index.css";
import images from "../assets/icon1.png";
import images1 from "../assets/icon2.png";
import images2 from "../assets/icon3.png";
import images3 from "../assets/icon4.png";
import images4 from "../assets/img1.png";
import images5 from "../assets/img2.png";
import images6 from "../assets/img3.png";

const Features = () => {
  return (
    //starting main div..
    <div
      className="  bg-cover h-full  bg-[url('https://i.ibb.co/TcVQ6XQ/Landing-Page-Scroll3.png')] "
      style={{ fontFamily: "Baloo Bhai 2" }}
    >
      <h1 className="text-center font-bold text-xl text-[#0139B5] leading-2 ">
        Features
      </h1>
      <br />
      <h2 className="text-center font-bold text-3xl text-[#7587A4] ">
        Beautiful Analytics to Grow Smarter
      </h2>

      <div className="grid grid-cols-4 gap-2 place-items-center text-center mt-8 ">
        <img src={images} className="w-14 " alt="icon" />
        <img src={images1} className="w-14" alt="icon" />
        <img src={images2} className="w-14" alt="icon" />
        <img src={images3} className="w-14" alt="icon" />
        <p className="mb-3 font-normal text-base py-2 px-2 mt-18">
          <h1 className="font-bold text-base text-blue">
            Connect with people all over the world
          </h1>
          <br />
          <p className="leading-loose">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </p>

        <p className="mb-3 font-normal text-base  py-2 px-2 mt-18">
          <h1 className="font-bold text-base text-blue">
            Get your Business off the Ground
          </h1>{" "}
          <br />
          <p className="leading-loose">
            We promise to give a Kickstart to your Business by Providing
            Guidance from IT Experts.
          </p>
        </p>

        <p className="mb-3 font-normal text-base mt-18 py-2 px-2 ">
          <h1 className="font-bold text-base text-blue">
            Funding your Next Big Idea
          </h1>
          <br />
          <p className="leading-loose">
            If your idea attracts any organization they can help you by
            providing funds or guidance.
          </p>
        </p>

        <p className="mb-3 font-normal text-base mt-18 py-2 px-2">
          <h1 className="font-bold text-base text-blue">
            {" "}
            Get a chance to get an Internship
          </h1>
          <br />
          <p className="leading-loose ">
            {" "}
            You can also connect with other entrepreneurs for the purpose of
            gaining experience, guidance, etc.
          </p>
        </p>
      </div>

      {/* <div className="grid grid-cols-4 gap-20 text-center  ml-16 mr-8">
        
      </div> */}

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 text-center  mt-6 mx-40">
        <div className=" rounded-[8rem] rounded-tl-[0rem] border-4 py-2 px-2 bg-[#0139B5] bg-opacity-25 h-80 w-80">
          <img src={images4} className="w-20 mx-24 ml-28" alt="icon" />
          <h1 className="font-bold text-blue text-2xl">
            Students
          </h1>
          <br />
          <p className="leading-loose text-xl text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>

        <div className="mb-3  rounded-[8rem] border-4 bg-[#0139B5] bg-opacity-25 py-2 px-2 h-80 w-80">
          <img src={images5} className="w-[8rem] mx-24" alt="icon" />
          <h1 className="font-bold text-blue text-2xl">
            University
          </h1>
          <br />
          <p className="leading-loose text-xl  text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>

        <div className="mb-3 rounded-[8rem] rounded-tr-[0rem] border-4 py-2 px-2 bg-[#0139B5] bg-opacity-25 h-80 w-80 ">
          <img src={images6} className="w-[8rem] mx-20 mt-4" alt="icon" />
          <h1 className="font-bold text-blue text-2xl">
            Organistaion
          </h1>
          <br />
          <p className="leading-loose text-xl text-blue">
            Opportunity to connect with experts all over the world with one
            click through ModernVate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

