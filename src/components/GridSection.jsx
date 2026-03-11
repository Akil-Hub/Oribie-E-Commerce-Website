import Button from "./common/Button";
import Heading from "./common/Heading";


const GridSection = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 wrapper">
      {/* Left Section: 2 columns grid */}
      <section className="left grid grid-cols-3 gap-4 w-full h-[400px]">
        <div className="grid gap-4 col-span-1">
          <div className=" w-full h-full bg-gray-500"></div>
          <div className=" w-full h-full bg-gray-500"></div>
          <div className=" w-full h-full bg-gray-500"></div>
        </div>

        <div className=" w-full h-full col-span-2 bg-gray-500"></div>
      </section>

      {/* Right Section */}
      <section className="right w-full h-[400px] bg-gray-100  items-center justify-center space-y-4">
      
    <Heading text={"We're Here To \n Service Your Hair \n Care Needs" }className='whitespace-pre-line font-bold text-black!' as='h2'/>

    <p className="text-gray-400">House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen.</p>

    <Button title={'Learn More'}/>
      </section>
    </article>
  );
};

export default GridSection;
