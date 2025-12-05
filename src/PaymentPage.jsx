/** @format */

import React from "react";

const PaymentPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-1/3 bg-[#0b7bbf] p-6 text-white flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/60"
              className="w-14 h-14 rounded-full bg-white"
            />
            <div>
              <h2 className="text-xl font-bold">Devbhoomi Career Point</h2>
              <p className="text-xs opacity-80">Razorpay Trusted Business</p>
            </div>
          </div>

          <div className="bg-[#c7eafa] text-black p-4 rounded-xl shadow">
            <p className="text-sm opacity-70">Price Summary</p>
            <p className="text-3xl font-semibold mt-1">₹298.71</p>
          </div>

          <div className="bg-[#c7eafa] text-black p-4 rounded-xl shadow flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0b7bbf] font-bold">
              👤
            </div>
            <p>Using as +91 74550 77400</p>
          </div>

          <div className="bg-[#c7eafa] text-black p-4 rounded-xl shadow flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0b7bbf] font-bold">
              🎁
            </div>
            <p>Offers on UPI, Card and...</p>
          </div>

          <div className="mt-auto text-sm opacity-80">Secured by Razorpay</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-2/3 p-8 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Payment Options</h2>
            <span className="text-2xl cursor-pointer">⋯</span>
          </div>

          <div className="flex mt-8 gap-8">
            {/* LEFT: OPTIONS */}
            <div className="w-1/2 flex flex-col gap-6">
              <div>
                <h3 className="text-gray-500 text-sm">Recommended</h3>
                <div className="mt-3 bg-[#e7f6ee] p-4 rounded-xl">
                  <h4 className="font-semibold text-lg">UPI</h4>
                  <p className="text-sm text-green-700 mt-1">3 Offers</p>
                </div>

                <div className="mt-3 bg-[#f1f9ff] p-4 rounded-xl">
                  <h4 className="font-semibold text-lg">Cards</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Upto 1.5% savings...
                  </p>
                </div>

                <div className="mt-3 bg-[#fff8e6] p-4 rounded-xl">
                  <h4 className="font-semibold text-lg">Netbanking</h4>
                </div>

                <div className="mt-3 bg-[#f3f3f3] p-4 rounded-xl">
                  <h4 className="font-semibold text-lg">Wallet</h4>
                </div>
              </div>
            </div>

            {/* RIGHT: QR + OFFERS */}
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">Available Offers</h3>
                <p className="text-blue-600 text-sm cursor-pointer">View all</p>
              </div>

              <div className="bg-[#f5fafd] p-4 rounded-xl shadow flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <p className="text-sm font-semibold">
                  Win up to ₹300 cashback via CRED...
                </p>
              </div>

              <div className="bg-[#f8fcff] p-6 rounded-xl shadow">
                <p className="text-gray-600 text-sm mb-3">UPI QR</p>
                <div className="flex gap-6">
                  <div className="w-40 h-40 bg-black" />
                  <div>
                    <p className="text-sm text-gray-600">
                      Scan the QR using any UPI App
                    </p>
                    <div className="flex gap-3 mt-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    </div>

                    <button className="mt-5 px-4 py-2 bg-green-200 text-green-800 rounded-full font-semibold">
                      3 Offers
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                By proceeding, I agree to Razorpay's Privacy Notice • Edit
                Preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
