import React, { useState, useEffect } from "react";

function Home() {
  const images = [
    "https://dfpd.gov.in/assets/img/one_nation_ration2.jpeg",
    "https://sarkariyojana.com/wp-content/uploads/2022/04/up-free-ration-scheme.jpg",
    "https://www.timesbull.com/wp-content/uploads/2025/10/Ration-Card-New-Update-.jpg",
    "https://images.news18.com/ibnkhabar/uploads/2021/04/PDS.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-black">
        <img
          src={images[currentImage]}
          alt="Hero"
          className="w-full h-[600px] object-contain transition-all duration-1000 ease-in-out"
        />

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-28 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          About the Project
        </h2>
        <p className="text-lg leading-relaxed text-justify text-gray-700">
          The <b>Ration and Welfare Transparency System</b> is a government
          initiative designed to promote transparency, prevent corruption, and
          ensure fair distribution of essential commodities. It empowers
          citizens to easily track their eligibility, ration details, and
          welfare schemes in real-time.
        </p>
      </section>

      {/* Schemes Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-600 inline-block">
            Major Government Schemes
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">S.No</th>
                  <th className="py-3 px-4 text-left">Scheme Name</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4 font-medium">
                    Pradhan Mantri Garib Kalyan Anna Yojana{" "}
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full ml-2">
                      🆕 New
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    Free food grains for poor families under the welfare
                    program.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4 font-medium">
                    Antyodaya Anna Yojana
                  </td>
                  <td className="py-3 px-4">
                    Subsidized food grains for the poorest of the poor
                    households.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4 font-medium">
                    National Food Security Act
                  </td>
                  <td className="py-3 px-4">
                    Ensures access to adequate quantity of quality food at
                    affordable prices.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">4</td>
                  <td className="py-3 px-4 font-medium">
                    Pradhan Mantri Ujjwala Yojana{" "}
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full ml-2">
                      🆕 New
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    Provides LPG connections to women from BPL households.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4 font-medium">
                    One Nation One Ration Card
                  </td>
                  <td className="py-3 px-4">
                    Allows ration portability across the country.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">6</td>
                  <td className="py-3 px-4 font-medium">
                    Pradhan Mantri Awas Yojana
                  </td>
                  <td className="py-3 px-4">
                    Affordable housing scheme for urban and rural poor.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">7</td>
                  <td className="py-3 px-4 font-medium">
                    Deen Dayal Antyodaya Yojana
                  </td>
                  <td className="py-3 px-4">
                    Promotes skill development and employment opportunities.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">8</td>
                  <td className="py-3 px-4 font-medium">
                    Digital India Initiative
                  </td>
                  <td className="py-3 px-4">
                    Aims to digitally empower citizens and improve online
                    services.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">9</td>
                  <td className="py-3 px-4 font-medium">Jan Dhan Yojana</td>
                  <td className="py-3 px-4">
                    Financial inclusion scheme for access to banking facilities.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4 font-medium">Ayushman Bharat</td>
                  <td className="py-3 px-4">
                    Provides free health insurance coverage for poor families.
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    Active
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transparency Info */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">
            Transparency & Information Access
          </h2>

          <p className="text-gray-700 mb-12 text-lg leading-relaxed text-justify">
            Our goal is to make all welfare and ration data accessible to every
            citizen in the most transparent way possible. All distribution,
            allocation, and beneficiary details are digitally recorded and
            monitored in real-time. Below are key indicators showing how
            transparency is maintained throughout the system.
          </p>

          <div className="grid grid-cols-4 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-5xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Real-Time Data
              </h3>
              <p className="text-center text-gray-600">
                Live monitoring of ration stock levels and welfare distribution
                across all regions.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-green-600 text-5xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Public Dashboards
              </h3>
              <p className="text-center text-gray-600">
                Citizens can track government welfare activities and verify
                their eligibility online.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-yellow-600 text-5xl mb-4 text-center">
                🧾
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Digital Records
              </h3>
              <p className="text-center text-gray-600">
                All beneficiary details are stored securely on verified
                government servers to prevent duplication.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-red-600 text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Accountability
              </h3>
              <p className="text-center text-gray-600">
                Distribution officers and officials are regularly audited to
                maintain full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PM & President Section */}
      <section className="py-20 px-28 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Words from Our Leaders
        </h2>
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="text-center">
            <img
              src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2025/07/25/202507253461921.jpg?quality=80&zoom=1&ssl=1"
              alt="Prime Minister"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-700">
              Hon’ble Prime Minister Shri Narendra Modi
            </h3>
            <p className="text-gray-600 mt-2 text-lg italic">
              “A transparent welfare system builds trust and strengthens our
              democracy.”
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/President_Droupadi_Murmu_official_portrait_higher_version.jpg/1638px-President_Droupadi_Murmu_official_portrait_higher_version.jpg"
              alt="President"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-700">
              Hon’ble President Smt. Droupadi Murmu
            </h3>
            <p className="text-gray-600 mt-2 text-lg italic">
              “Empowering citizens with clarity and accessibility is the true
              essence of governance.”
            </p>
          </div>
        </div>
      </section>

      {/* News & Highlights */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block">
            News & Highlights
          </h2>

          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Headline</th>
                  <th className="py-3 px-4 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">27 Oct 2025</td>
                  <td className="py-3 px-4">
                    Government launches new ration distribution tracker
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline">
                      Read More
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">25 Oct 2025</td>
                  <td className="py-3 px-4">
                    New welfare scheme announced for rural families
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline">
                      Read More
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">23 Oct 2025</td>
                  <td className="py-3 px-4">
                    Digital ration cards to be linked with Aadhaar soon
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline">
                      Read More
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">20 Oct 2025</td>
                  <td className="py-3 px-4">
                    State governments to ensure full transparency in ration
                    delivery
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:underline">
                      Read More
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
