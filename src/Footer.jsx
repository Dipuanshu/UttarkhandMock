/** @format */

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* FOOTER TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-gray-300 text-sm">
            © 2025 - Devbhoomi Career point
          </p>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">Have a query?</h3>
            <p className="text-gray-300 text-sm">
              Contact us and we will get back to you on your number
            </p>

            <div className="flex space-x-3 justify-center md:justify-end mt-3">
              <button className="px-5 py-2 bg-[#ff2e8e] text-white rounded-lg font-medium hover:bg-pink-600">
                Contact Us
              </button>
              <button className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
                View Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
