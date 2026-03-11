import React from "react";
import { FaMessage } from "react-icons/fa6";
import Blog from "./common/Blog";

const BlogSection = ({ className, heading }) => {
  return (
    <article
      className="wrapper
     py-20 "
    >
      <h2 className="font-bold text-4xl text-center pb-13">Our Latest Blog</h2>

      <section className="blogs flex flex-col md:flex-row justify-center items-center gap-10">
       

       <Blog/>
       <Blog/>
       <Blog/>
   

      </section>
    </article>
  );
};

export default BlogSection;
