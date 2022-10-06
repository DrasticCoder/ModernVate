import React from "react";
import images8 from "../assets/group1.png";

const AboutUs1 = () => {
  return (
    <section
      className="bg-cover h-full bg-[url('https://i.ibb.co/xLDBgxX/bg4.png')] "
      style={{ fontFamily: "Baloo Bhai 2" }}
    >
      <div class="grid xl:gap-0 lg:grid-cols-12">
        <div class="mr-auto text-left lg:col-span-7 ml-4 ">
          <div className="grid-row-4 ">
            <p className="px-2">
              <p className="font-weight-700 font-bold text-4xl text-redish ">
                Innovation
              </p>
              <p className="font-weight-600 text-3xl"> &</p>
              <p className="font-weight-700 font-bold text-4xl text-orange ">
                Inspiration
              </p>
              <p className="text-2xl text-gray-500 leading-loose tracking-normal">
                may come at any age whether <br /> you're 17 or 70 , all you
                need is some
              </p>
              <p className="font-weight-700 font-bold text-4xl text-redish ">
                Tools
              </p>
              <p>& </p>
              <p className="font-weight-700 font-bold text-4xl text-orange ">
                Guidance.
              </p>
              <br />
              <p className="font-weight-600 font-sm  text-blue  font-semibold text-3xl">
                {" "}
                And we're here to give you that.
              </p>{" "}
            </p>
          </div>
          <br />
          <p class="max-w-2xl text-gray-500 font-weight-400 md:text-lg lg:text-3xl mt-4]">
            The Incubation Centers provide students with <br />
            the necessary guidance that may be required for <br />
            their idea to survive and scale..
          </p>
        </div>

        <img src={images8} className="max-w-xl mr-32" alt="icon" />
      </div>
    </section>
  );
};
export default AboutUs1;
