import React from "react";
import Image from "./common/Image";
import test1 from "../assets/testiIcon1.png";
import test2 from "../assets/testiIcon2.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import line from "../assets/line.png";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <article
      className="wrapper
     py-20 "
    >
      <h2 className="font-bold text-4xl text-center pb-13">Testimonial</h2>

      <section className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10">
        <div className="w-1/2">
          <Image imgSrc={test1} className="w-20! h-20!" />
          <p className="py-3 pt-4 text-lg ">
            A very nice massage experience, although I realized while paying
            that I seemed to have been shorted by about 10 minutes, which was
            disappointing.{" "}
          </p>
          <Image imgSrc={line} />

          <div className="flex gap-2 items-center -ml-13 ">
            <Image imgSrc={client1} className="w-40! h-40! " />
            <div className=" mb-8">
              <h5 className="font-bold text-3xl">Juliann Saucedo</h5>
              <p className="py-2">
                <i>paypal inc.</i>
              </p>
              <div className="flex text-amber-400">
                {" "}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image imgSrc={test2} className="w-20! h-20!" />
          <p className="py-3 pt-4 text-lg ">
            A very nice massage experience, although I realized while paying
            that I seemed to have been shorted by about 10 minutes, which was
            disappointing.{" "}
          </p>
          <Image imgSrc={line} />

          <div className="flex gap-2 items-center -ml-13 ">
            <Image imgSrc={client2} className="w-40! h-40! " />
            <div className=" mb-8">
              <h5 className="font-bold text-3xl">Juliann Saucedo</h5>
              <p className="py-2">
                <i>paypal inc.</i>
              </p>
              <div className="flex text-amber-400">
                {" "}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Testimonials;
