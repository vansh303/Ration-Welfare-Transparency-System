import React, { useState, useEffect } from "react";

function AdminDashboard() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [note, setNote] = useState(localStorage.getItem("adminNote") || "");
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Meeting with supplier tomorrow", read: false },
    { id: 2, message: "System maintenance at 11 PM", read: false },
    { id: 3, message: "New citizen request pending verification", read: false },
  ]);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("adminNote", note);
  }, [note]);

  // Access Key validation
  const handleAccess = () => {
    if (keyInput === "admin123") {
      setAccessGranted(true);
    } else {
      alert("❌ Invalid Access Key!");
    }
  };

  // Theme switcher
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "tricolor" : "light"
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // If access not granted
  if (!accessGranted) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center w-[350px]">
          <h2 className="text-xl font-bold mb-3 text-gray-700">
            🔐 Admin Access Required
          </h2>
          <input
            type="password"
            placeholder="Enter Access Key"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          />
          <button
            onClick={handleAccess}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 w-full"
          >
            Unlock Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "tricolor"
          ? "bg-gradient-to-b from-[#FF9933] via-white to-[#138808] text-gray-800"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 border-b border-gray-300 shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={toggleTheme}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Switch Theme
        </button>
      </header>

      {/* Overview Section */}
      <section className="grid grid-cols-4 gap-6 p-10">
        {[
          { title: "Total Beneficiaries", count: 874230 },
          { title: "Total Ration Distributed", count: 324780 },
          { title: "Pending Applications", count: 421 },
          { title: "Suspicious Activities", count: 18 },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              {item.count.toLocaleString()}
            </p>
          </div>
        ))}
      </section>

      {/* AI Alerts */}
      <section className="bg-red-100 p-6 mx-10 rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-bold mb-3 text-red-700">🚨 AI Alerts</h2>
        <div className="animate-marquee space-x-10 whitespace-nowrap text-red-600 font-medium">
          <span>Fake Ration Card detected in Bihar region.</span>
          <span>Distribution delay reported in UP zone.</span>
          <span>Low stock alert from Delhi Warehouse.</span>
          <span>Unverified citizen entry flagged in Odisha.</span>
        </div>
      </section>

      {/* Warehouse & District Data */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-4">🏢 Warehouse Stock Tracker</h2>
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-2 border">Warehouse</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Stock Left</th>
              <th className="p-2 border">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Central Depot", "Delhi", "82,000 kg", "26 Oct 2025"],
              ["East Zone", "Bihar", "45,200 kg", "26 Oct 2025"],
              ["South Warehouse", "Tamil Nadu", "73,500 kg", "25 Oct 2025"],
            ].map((row, i) => (
              <tr key={i} className="text-center hover:bg-gray-100">
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Citizen Management */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-4">👥 Citizen Management</h2>
        <input
          type="text"
          placeholder="Search by Name or Ration ID"
          className="border border-gray-400 rounded px-3 py-2 mb-4 w-full"
        />
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Ration ID</th>
              <th className="p-2 border">District</th>
              <th className="p-2 border">Eligibility</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Ramesh Kumar", "RC101", "Delhi", "APL", "Verified"],
              ["Sita Devi", "RC102", "UP", "BPL", "Pending"],
              ["Ajay Singh", "RC103", "Bihar", "APL", "Suspicious"],
            ].map((row, i) => (
              <tr key={i} className="text-center hover:bg-gray-100">
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border">
                    {cell}
                  </td>
                ))}
                <td className="p-2 border">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2">
                    View
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2">
                    Verify
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Admin Notes */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-4">📝 Admin Notes</h2>
        <textarea
          rows="4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write important notes here..."
          className="border border-gray-400 rounded px-3 py-2 w-full mb-3"
        />
        <p className="text-sm text-gray-500">
          (Your notes are auto-saved locally)
        </p>
      </section>

      {/* Notifications */}
      <section className="p-10">
        <h2 className="text-xl font-bold mb-4">🔔 Notifications</h2>
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3 rounded-lg shadow-md flex justify-between items-center ${
                n.read ? "bg-gray-200" : "bg-yellow-100"
              }`}
            >
              <span>{n.message}</span>
              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
