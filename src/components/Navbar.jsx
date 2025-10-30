import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        if (!window.googleTranslateElementInit.initialized) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,hi,bn,gu,ta,te,kn,ml,mr,pa,or,as,ur,ks,sd,ne,sa,mai,bo",
              layout:
                window.google.translate.TranslateElement.InlineLayout
                  .HORIZONTAL,
            },
            "google_translate_element"
          );
          window.googleTranslateElementInit.initialized = true;
        }
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header className="w-full shadow-md border-b-4 border-[#138808]">
      {/* Top Strip */}
      <div className="bg-[#f4f4f4] text-sm flex justify-between items-center px-10 py-1 text-gray-700">
        <p>🇮🇳 Government of India</p>
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:underline">
            Skip to Main Content
          </a>
          <a href="#" className="hover:underline">
            Screen Reader
          </a>
          {/* Google Translate Dropdown */}
          <div
            id="google_translate_element"
            className="translate-dropdown"
          ></div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-10 py-3 bg-white">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.uxdt.nic.in/wp-content/uploads/2020/01/NE_Preview1.png?x44977"
            alt="India Logo"
            className="h-12 w-12"
          />
          <div>
            <h1 className="text-base font-semibold text-gray-800 leading-tight">
              Ration & Welfare Transparency System
            </h1>
            <p className="text-sm text-gray-500">
              Ministry of Consumer Affairs, Government of India
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 text-gray-700 font-medium text-lg">
          <li>
            <a href="/" className="hover:text-green-700">
              Home
            </a>
          </li>
          <li>
            <a href="/citizendashboard" className="hover:text-green-700">
              Citizen Dashboard
            </a>
          </li>
          <li>
            <a href="/admindashboard" className="hover:text-green-700">
              Admin Dashboard
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom tricolor line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>

      {/* Hide Google Translate Branding */}
      <style>{`
        .goog-logo-link, .goog-te-banner-frame.skiptranslate {display: none !important;}
        body { top: 0px !important; }
        .goog-te-gadget span { display: none; }
        .translate-dropdown select {
          background: white;
          border: 1px solid #ccc;
          padding: 4px 8px;
          border-radius: 5px;
          color: #333;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}

export default Navbar;
