import Heading from "./common/Heading";

const OurServices = () => {
  return (
    <article className="wrapper mt-20">
      <Heading
        text={"Our Services"}
        as="h3"
        className="text-black! font-bold text-3xl! text-center"
      />

      <p className="text-center text-gray-400  px-20 py-3">
        Whether you are looking for a quick beach side gateway or a pampering
        day for yourself, we have hair treatments to meet your needs. All of our
        services are specially designed for restorative, recovery and
        relaxation.
      </p>

      <section className="left flex flex-col md:flex-row py-20 gap-10">
        <div className=" space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Hair Cut</h3>
            <strong className="text-primary font-semibold">$20</strong>
          </div>
          <p className="text-gray-500 pr-20">
            Aromatherapy is just another thing to look and feel younger, more
            energetic and attractive in your body.
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Highlights</h3>
            <strong className="text-primary font-semibold">$20</strong>
          </div>{" "}
          <p className="text-gray-500 pr-20">
            Aromatherapy is just another thing to look and feel younger, more
            energetic and attractive in your body.
          </p>
        </div>

        <div className=" space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Hair Cut</h3>
            <strong className="text-primary font-semibold">$20</strong>
          </div>
          <p className="text-gray-500  pr-20">
            Aromatherapy is just another thing to look and feel younger, more
            energetic and attractive in your body.
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Highlights</h3>
            <strong className="text-primary font-semibold">$20</strong>
          </div>{" "}
          <p className="text-gray-500 pr-20">
            Aromatherapy is just another thing to look and feel younger, more
            energetic and attractive in your body.
          </p>
        </div>
      </section>
    </article>
  );
};

export default OurServices;
