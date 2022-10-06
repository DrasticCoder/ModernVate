import React from "react";
import images1 from "../assets/capa.png";
import insta from "../assets/instagram.png";
import fb from "../assets/fb.png";
import telegram from "../assets/telegram.png";
import inpng from "../assets/in.png";
import twitter from "../assets/twitter.png";

const AboutUs4 = () => {
  return (
    <div className=" bg-cover h-screen " style={{backgroundImage: `url(https://i.ibb.co/MkYhb5G/bg3.png)`}}>
      <h1 className="text-center font-bold text-3xl text-blue leading-2 ">
        Our Capablities
      </h1>
      <div className="grid grid-cols-3  max-w-lg  pt-10 ">
        <div class="mb-3  rounded-[3rem] border-4 bg-white bg-opacity-25 h-72 w-72 ml-10 shadow-2xl">
          <p className="leading-relaxed text-base py-2 px-3 font-semibold text-center  text-[#7587A4]">
            Modern Solutions Hub develops innovation at all levels within
            colleges, universities, and organizations combining complementary
            and specialized competencies to help our clients on their Innovation
            & Transformation journey to growth and value creation.
          </p>
        </div>
        <div class="mb-3  rounded-[3rem] border-4 bg-white bg-opacity-25 shadow-2xl  h-72 w-72 ml-48">
          <p className="leading-relaxed text-base py-16 px-2 font-semibold text-center  text-[#7587A4]">
            Whether you are a student, faculty, college or university, start-up
            or MNC organization, we provide coaching, solutions & services to
            help you on your transformation journey.
          </p>
        </div>
        <div className="ml-[30rem]">
          <img src={images1} className="max-w-xl mt-1  " alt="icon" />{" "}
        </div>
        <div class="mb-3  rounded-[3rem] border-4 bg-white bg-opacity-25 shadow-2xl  py-1 px-6 h-72 w-72 ml-10">
          <p className="leading-relaxed text-base py-20 px-2 font-semibold text-center text-[#7587A4]">
            Our philosophy is to work with you to transform you and your
            organization to drive your own success where and when you need it.
          </p>
        </div>
        <div class="mb-3  rounded-[3rem] border-4 bg-white bg-opacity-25  shadow-2xl py-2 px-2 h-72 w-72 ml-48">
          <p className="leading-relaxed text-base py-20 px-2 font-semibold text-center  text-[#7587A4]">
            We help our clients to transform. We prepare organizations for
            change and use innovative personalized solutions to make this
            happen.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4 pr-10">
        <a href="https://www.instagram.com/drastic_coder/" className="">
          <img
            alt="instagram"
            src={insta}
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          ></img>
          <span className="sr-only">instagram page</span>
        </a>
        <a href="https://www.instagram.com/drastic_coder/">
          <img
            alt="Facebook"
            src={fb}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          ></img>
          <span className="sr-only">facebook page</span>
        </a>
        <a href="https://www.instagram.com/drastic_coder/">
          <img
            alt="telegram"
            src={telegram}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          ></img>
          <span className="sr-only">telegram page</span>
        </a>
        <a href="https://www.instagram.com/drastic_coder/">
          <img
            alt="in"
            src={inpng}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          ></img>
          <span className="sr-only">in page</span>
        </a>
        <a href="https://www.instagram.com/drastic_coder/">
          <img
            alt="twitter"
            src={twitter}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          ></img>
          <span className="sr-only">twitter page</span>
        </a>
      </div>
    </div>
  );
};
export default AboutUs4;
