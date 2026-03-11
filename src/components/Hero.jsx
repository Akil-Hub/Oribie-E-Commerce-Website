
import Heading from "../components/common/Heading";
import Button from "../components/common/Button";

const Hero = () => {
  return (
      <article className="flex justify-center items-center  font-bold h-screen bg-[#030D1180]">
        <section className="flex flex-col md:flex-row justify-between items-center wrapper gap-30">
          <div className="left">
            <Heading
              text={"#Welcome!\n The Best Hair Saloon"}
              as="h1"
              className="text-primary  whitespace-pre-line leading-17"
            />

            <p className="text-gray-300 py-4">
              We use quality products and the latest styling techniques to bring
              out your very best. We promises to provide you with 5-star
              service.
            </p>

            <Button title="Make Appointment" />
          </div>
          <div className="right">
            <div className="h-50 w-60 bg-gray-300"></div>
          </div>
        </section>
      </article>
  )
}

export default Hero