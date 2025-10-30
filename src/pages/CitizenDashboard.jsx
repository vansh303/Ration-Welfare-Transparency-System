import React, { useState } from "react";

function CitizenDashboard() {
  const [showDetails, setShowDetails] = useState(false);
  const [formData, setFormData] = useState({
    rationCardNumber: "",
    aadhaarNumber: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.rationCardNumber.trim() &&
      formData.aadhaarNumber.trim() &&
      formData.mobileNumber.trim()
    ) {
      setShowDetails(true);
    } else {
      alert("Please fill in all the details correctly.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Citizen Dashboard
      </h2>

      {/* Input Form */}
      {!showDetails && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Enter Your Details
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Ration Card Number
            </label>
            <input
              type="text"
              name="rationCardNumber"
              value={formData.rationCardNumber}
              onChange={handleChange}
              placeholder="Enter your ration card number"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              placeholder="Enter your Aadhaar number"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your registered mobile number"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Check Details
          </button>
        </form>
      )}

      {/* Show Details After Form Submit */}
      {showDetails && (
        <div className="mt-10 space-y-8">
          {/* Ration Distribution Details */}
          <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Ration Distribution Details
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>Rice: 5kg - Received on 15 Oct 2025</li>
              <li>Wheat: 3kg - Received on 15 Oct 2025</li>
              <li>Sugar: 1kg - Pending</li>
              <li>Oil: 1L - Received on 15 Oct 2025</li>
            </ul>
          </section>

          {/* Transaction History */}
          <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Transaction History
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-gray-800">
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Item</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">15 Oct 2025</td>
                  <td className="border p-2">Rice</td>
                  <td className="border p-2">5kg</td>
                  <td className="border p-2 text-green-600 font-medium">
                    Delivered
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">15 Oct 2025</td>
                  <td className="border p-2">Wheat</td>
                  <td className="border p-2">3kg</td>
                  <td className="border p-2 text-green-600 font-medium">
                    Delivered
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Pending</td>
                  <td className="border p-2">Sugar</td>
                  <td className="border p-2">1kg</td>
                  <td className="border p-2 text-yellow-600 font-medium">
                    Awaiting
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Notifications */}
          <section className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Notifications
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Next ration distribution scheduled for 15 November 2025.</li>
              <li>Your sugar allotment is delayed due to stock issues.</li>
              <li>
                Update your mobile number if you haven’t received SMS alerts.
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}

export default CitizenDashboard;
