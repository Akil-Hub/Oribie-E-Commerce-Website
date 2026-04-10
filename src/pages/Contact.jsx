const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-4">
              📍 Address: Dhaka, Bangladesh
            </p>
            <p className="text-gray-600 mb-4">
              📧 Email: support@example.com
            </p>
            <p className="text-gray-600">
              📞 Phone: +880 1234 567 890
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Send Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
