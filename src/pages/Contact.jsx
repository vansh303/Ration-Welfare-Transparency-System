import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center text-[#138808] mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#FF9933]">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Ministry of Consumer Affairs
          </h2>
          <p className="text-gray-600 mb-2">
            📍 Krishi Bhavan, New Delhi – 110001, India
          </p>
          <p className="text-gray-600 mb-2">📞 Helpline: 1800-11-4000</p>
          <p className="text-gray-600 mb-2">📧 Email: support@gov.in</p>
          <p className="text-gray-600 mb-6">🌐 Website: www.mygov.in</p>

          <h3 className="font-semibold text-gray-800 mb-2">
            Office Hours:
          </h3>
          <p className="text-gray-600 mb-2">Monday - Friday: 9 AM - 6 PM</p>
          <p className="text-gray-600">Saturday, Sunday: Closed</p>

          <h3 className="font-semibold text-gray-800 mt-6 mb-2">
            Social Media:
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-800 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-pink-600 hover:underline">
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#138808]"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Send Us a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#138808]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#138808]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#138808]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#138808]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#138808] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-10">
        <iframe
          title="Ministry Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.335053373927!2d77.21411887502726!3d28.58842097569872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d1d7e3f5f1%3A0x6f7bbde5c74c2b4c!2sKrishi%20Bhavan%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1696766229158!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-md"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
