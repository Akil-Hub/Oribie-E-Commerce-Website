const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are passionate about delivering high-quality products that make your life easier and better.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a modern eCommerce platform focused on providing the best products
              at the best prices. Our goal is to create a seamless shopping experience
              for customers worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With innovation and customer satisfaction at our core, we continuously
              improve our platform to meet your needs.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality products with exceptional customer service while
              maintaining affordability and trust.
            </p>
          </div>

        </div>

        {/* Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {["Quality", "Trust", "Innovation"].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {item}
              </h4>
              <p className="text-gray-600">
                We prioritize {item.toLowerCase()} in everything we do to ensure
                customer satisfaction.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
