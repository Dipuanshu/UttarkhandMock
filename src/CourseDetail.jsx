/** @format */

import { React, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"; // <-- Footer import
import CourseModal from "./CourseModal";
import CouponModal from "./CouponModal";

const CourseDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCouponModal, setOpenCouponModal] = useState(false);
  return (
    <>
      <Header />

      <div className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row gap-10 pt-24">
        {/* LEFT SIDE */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            UKSSSC 50+ EVERGREEN GROUP C FULL LENGTH MOCK/PRACTICE SETS (हिन्दी
            + अंग्रेजी दोनों भाषा में)
          </h1>

          <p className="text-gray-600 text-sm mt-3">
            UKSSSC • UTTARAKHAND POLICE • GROUP C EXAM • VDO • VPDO • Forest
            Guard • Patwari • Lekhpal • Junior Assistant • Stenographer
          </p>

          {/* Tags */}
          <div className="flex gap-3 mt-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">
              TEST
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded text-xs">
              PDFS
            </span>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b mt-8 pb-2">
            <span className="text-pink-500 font-semibold border-b-2 border-pink-500 pb-1 cursor-pointer">
              OVERVIEW
            </span>
            <span className="text-gray-500 cursor-pointer">CONTENT</span>
          </div>

          {/* About Box */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold">About This Course</h2>

            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              UKSSSC 50+ EVERGREEN GROUP C FULL LENGTH PRACTICE SETS +
              National-International, Uttarakhand Current Affairs tests + 20
              Topic tests (दोनों भाषाओं में) Bilingual
            </p>

            <p className="mt-3 text-sm text-red-600">
              Note – सभी टेस्ट केवल ऑनलाइन मोड में उपलब्ध होंगे। (किसी भी प्रकार
              की PDF नहीं मिलेगी)
            </p>

            <button className="text-pink-600 text-sm mt-3 font-medium">
              Read More
            </button>
          </div>

          {/* 1 YEAR VALIDITY SECTION */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6 flex items-center justify-between border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                🕒
              </div>
              <div>
                <h3 className="font-semibold">1 Year Validity</h3>
                <p className="text-xs text-gray-500">
                  You will get this course for 1 full Year(s)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer text-blue-500">
              ➜
            </div>
          </div>

          {/* COUPON BOX */}
          <div className="bg-pink-50 rounded-xl shadow-sm p-4 mt-6 border">
            <h4 className="text-lg font-semibold mb-2">You Pay</h4>

            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-700 flex items-center gap-2">
                🎟️ Have a coupon code <br />
                <span className="text-gray-500 text-xs">
                  Click above to find available coupons and get extra discounts.
                </span>
              </p>

              <button
                onClick={() => setOpenCouponModal(true)}
                className="text-pink-600 text-sm font-medium"
              >
                Apply here
              </button>
            </div>

            <div className="mt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹299</span>
            </div>
          </div>

          {/* ABOUT COURSE CREATOR */}
          <div className="bg-white rounded-xl shadow-md p-6 mt-6 border">
            <h3 className="text-lg font-semibold mb-4">About Course Creator</h3>

            <div className="flex items-start gap-4">
              <img
                src="/LogoUttakhandMock.jpg"
                alt="Author"
                className="w-14 h-14 rounded-full border"
              />

              <div>
                <h4 className="font-bold">DERADUN COACHING CENTER</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  UTTRAKHAND GK/G.S, GENERAL HINDI, CURRENT AFFAIRS & GENERAL
                  STUDIES. M.A HISTORY, LLB (Hons) PGDM. 10 yrs Experience.
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  10000+ Students • 33 Courses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-lg rounded-xl p-4 border">
            <img
              src="https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F9702a051-39e6-46db-9abb-d6da6ab0bf54.jpg&w=640&q=7"
              className="rounded-lg w-full"
              alt="Course Banner"
            />

            <h3 className="text-lg font-semibold mt-3">
              UKSSSC GROUP C Evergreen Test Series
            </h3>

            <div className="flex items-center mt-2 gap-3">
              <span className="text-3xl font-bold">₹299</span>
              <span className="line-through text-gray-500">₹1,018</span>
              <span className="text-green-600 font-semibold">72% OFF</span>
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="mt-5 bg-pink-500 w-full py-3 rounded-xl text-white font-semibold text-lg hover:bg-pink-600 duration-200"
            >
              Get this course
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      <CourseModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <CouponModal
        isOpen={openCouponModal}
        onClose={() => setOpenCouponModal(false)}
      />
    </>
  );
};

export default CourseDetail;
