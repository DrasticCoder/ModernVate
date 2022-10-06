import MV1 from "../assets/modernvatePillar.png";
import Better from "../assets/Better.png";
import Cheaper from "../assets/Cheaper.png";
import Faster from "../assets/Faster.png";
import Easier from "../assets/Easier.png";
import bgpic from "../assets/aboutUs3Bg.png";
import React from "react";

function AboutUs3() {
//   function increaseHeight() {}

  function toggleText1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var button = document.getElementById("button1");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  function toggleText2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var button = document.getElementById("button2");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  function toggleText3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var button = document.getElementById("button3");

    if (dots.classList.contains("hidden")) {
      // Show the dots
      dots.classList.remove("hidden");

      // Hide the more text
      moreText.classList.add("hidden");

      // change text of the button
      button.innerHTML = "Read more";
    } else {
      // Hide the dots
      dots.classList.add("hidden");

      // hide the more text
      moreText.classList.remove("hidden");

      // change text of the button
      button.innerHTML = "Read less";
    }
  }

  return (
    <main className="mx-auto h-screen bg-cover" style={{backgroundImage: `url(${bgpic})`}}>
      <div className="">
        <h1 className="text-center text-[#0139B5] font-bold text-4xl pt-5 underline  decoration-[#0139B5]">
          Pillars of innovation
        </h1>
        <div className="flex justify-between items-center">
          <img
            className="ml-20 mt-8 h-96 w-96 sm:h-full md:h-full"
            src={MV1}
            alt="Pillars of Modernvate"
          />
          <div className="text-left grid grid-cols-2 gap-12 ml-10 mr-10">
            <div className="flex justify-left items-center">
              <img
                src={Better}
                alt="Better"
                className="object-scale-down h-20 w-20 pr-2"
              />
              <span className="text-base text-[#EF4A37] font-bold">
                BETTER
                <p className="text-sm text-[#0139B5] font-semibold">
                  Helps you to decide what is better for you
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src={Cheaper}
                alt="Cheaper"
                className="object-scale-down h-20 w-20 pr-2"
              />
              <span className="text-base text-[#EF4A37] font-bold">
                CHEAPER
                <p className="text-sm text-[#0139B5] font-semibold">
                  With affordable low-cost expert guidance & services
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src={Faster}
                alt="Faster"
                className="object-scale-down h-20 w-20 pr-2"
              />
              <span className="text-base text-[#EF4A37] font-bold">
                FASTER
                <p className="text-sm text-[#0139B5] font-semibold">
                  Provides a pathway to get a faster outcome
                </p>
              </span>
            </div>

            <div className="flex justify-left items-center">
              <img
                src={Easier}
                alt="Easier"
                className="object-scale-down h-20 w-20 pr-2"
              />
              <span className="text-base text-[#EF4A37] font-bold">
                EASIER
                <p className="text-sm text-[#0139B5] font-semibold">
                  Making everything easy for you
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-beetween items-stretch flex-row text-justify">
          <div className="mt-10 ml-5  w-3/12 rounded-[3rem] border-4 shadow-2xl mb-8 bg-white bg-opacity-25 ">
            <h1 className="text-[#0139B5] font-bold text-2xl text-center py-3">
              Sharpen your Ideas
            </h1>
            <p className="text-clip overflow-hidden ... pb-3 px-3">
              The verified students’ ideas will be visible to each and every
              user using our website. With the help of the verified users’
              ideas, other users may get extra knowledge or they can sharpen
              their ideas.
              <span id="dots1">...</span>
              <span id="more1" class="hidden">
                &nbsp;If any industry or organization wants to add more points
                to the ideas, they can do it. They can do it using comments and
                ask them to modify their idea accordingly.
              </span>
              <button
                onClick={toggleText1}
                id="button1"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className=" mt-10 ml-5 mb-8 h-auto w-3/12 rounded-[3rem] border-4 shadow-2xl bg-white bg-opacity-25">
            <h1 className="text-[#0139B5] font-bold text-2xl text-center py-3">
              Guidance for students
            </h1>
            <p className="pb-3 px-3">
              Students get an opportunity to submit their ideas. Any student or
              user generates any idea, they can upload it on our website, those
              ideas will be verified by the industrialists, organizations, or
              any higher
              <span id="dots2">...</span>
              <span id="more2" className="more hidden">
                &nbsp;authority, and will get an opportunity to execute their
                ideas. Industrialists may also like or comment on the ideas
                generated by the students.
              </span>
              <button
                onClick={toggleText2}
                id="button2"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className=" mt-10 ml-5 h-auto w-3/12  mb-8 rounded-[3rem] border-4 shadow-2xl bg-white bg-opacity-25">
            <h1 className="text-[#0139B5] font-bold text-2xl text-center py-3">
              Internships & Investment
            </h1>
            <p className="pb-3 px-3">
              The verified users may get an opportunity from industrialists or
              business experts to invest in their ideas and also get a chance to
              get internships and placements.
              <span id="dots3">...</span>
              <span id="more3" class="hidden">
                &nbsp;The investors can collaborate with the verified users as
                and how they feel appropriate.
              </span>
              <button
                onClick={toggleText3}
                id="button3"
                className=" underline text-sky-700 duration-300 hover:text-sky-500 decoration-sky-500"
              >
                Read more
              </button>
            </p>
          </div>
          <div className=" mt-10 mr-5 ml-5 h-auto w-3/12  mb-8 rounded-[3rem] border-4 shadow-2xl bg-white bg-opacity-25">
            <h1 className="text-[#0139B5] font-bold text-2xl text-center py-3">
              Test Maturity Level
            </h1>
            <p className="pb-3 px-3">
              Universities and Industries will get to know their maturity level
              in the market, through a predefined criteria.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs3;
