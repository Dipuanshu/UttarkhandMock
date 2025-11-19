/** @format */

import CourseSlider from "./CourseSlider";
import Header from "./Header";
import Footer from "./Footer";

const recentCourses = [
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F3126ec97-d300-4b8e-abc7-0a9431db94d4.jpg&w=640&q=75",
    tags: ["FREE CONTENT", "VIDEOS", "FILES"],
    title: "National-International Current Affairs Magazine Lifetime Course",
    price: 90,
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2Fdadb4c63-061e-4f2f-8be4-47024e61d166.jpg&w=640&q=75",
    tags: ["TESTS", "FILES"],
    title: "UKSSSC GK All Chapters Test Pack",
    price: 120,
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F5a7c7fc0-003f-436c-a61d-35bd1fe646bb.jpg&w=640&q=75",
    tags: ["VIDEOS"],
    title: "UKPSC Samanya Gyan Full Course",
    price: 150,
  },
];

const featuredCourses = [
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F9702a051-39e6-46db-9abb-d6da6ab0bf54.jpg&w=640&q=75",
    tags: ["FREE CONTENT"],
    title: "Evergreen Test Series for UKSSSC Exams",
    price: 281,
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F51b6817c-e751-4d10-8841-0a668924c7fe.jpg&w=640&q=75",
    tags: ["TESTS", "VIDEOS"],
    title: "UK GK 100+ Mock Tests",
    price: 97,
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F0f134513-b36c-464a-ae53-28c822d6bfde.jpg&w=640&q=75",
    tags: ["TESTS"],
    title: "Uttarakhand GK All Mock Tests",
    price: 100,
  },
];

const courses = [
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fcdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F9702a051-39e6-46db-9abb-d6da6ab0bf54.jpg&w=640&q=75",
    tags: ["FREE CONTENT", "TESTS", "FILES"],
    title: "UKSSSC 50+ EVERGREEN GROUP C FULL LENGTH MOCK/PRACTICE SETS",
    price: 281,
    oldPrice: 1000,
    discount: "71% OFF",
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F849785d5-85fb-4b99-a3da-2362f81ef186.jpg&w=640&q=75",
    tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
    title: "Only उत्तराखंड सामान्य ज्ञान 100+ Mock टेस्ट,UK GK 100+ Mock tests",
    price: 97,
    oldPrice: 499,
    discount: "80% OFF",
  },
  {
    img: "https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Fpuesw%2F3126ec97-d300-4b8e-abc7-0a9431db94d4.jpg&w=640&q=75",
    tags: ["TESTS"],
    title: "सम्पूर्ण उत्तराखंड GK अध्यायवार MCQ's, GK Mcqs chapter wise",
    price: 100,
    oldPrice: 999,
    discount: "89% OFF",
  },
];

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-24">
        {/* ===== Header Section ===== */}
        <div className="bg-pink-100 py-10 px-6">
          <div className="max-w-6xl mx-auto flex items-start gap-6">
            <img
              src="/LogoUttakhandMock.jpg"
              alt="Logo"
              className="w-28 h-28 rounded-lg object-cover"
            />

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                About Dehradun Coaching Center
              </h2>

              <p className="text-gray-700 mt-2 leading-relaxed">
                'प्रतिस्पर्धा हमेशा स्वयं से करें ,यकीन मानिए आप 'जीत' जायेंगे।"
                D.C.P * UKPSC & UKSSSC प्रतियोगी परीक्षाओं के दृढ़,कर्मठ एवं
                धैर्यशील अभ्यर्थियों को सहदया समर्पित * Note : DEVbhoomi CAREER
                POINT केवल एक online education प्लेटफार्म है और हमारा उत्तराखंड
              </p>
            </div>
          </div>
        </div>

        {/* ===== Categories Tabs ===== */}
        <div className="max-w-6xl mx-auto px-6 mt-5">
          <div className="flex gap-4 border-b pb-3 text-gray-700 font-medium">
            <button className="px-4 py-2 bg-white rounded-xl shadow text-pink-600 border border-pink-400">
              📚 All Categories (23)
            </button>

            <button className="px-4 py-2 hover:text-pink-600">
              🏛 State govt exams - SSC (14)
            </button>

            <button className="px-4 py-2 hover:text-pink-600">
              🎌 State PSC Exams (11)
            </button>
          </div>
        </div>

        {/* ===== Sub-categories ===== */}
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <h3 className="text-gray-700 mb-2">Sub-category (31)</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "UKSSSC (20)",
              "UKPSC (17)",
              "UKSSSC GROUP… (12)",
              "UKPSC/UKSSSC (8)",
              "forest guard (8)",
              "UKPCS (6)",
            ].map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white rounded-xl shadow cursor-pointer text-gray-700 border border-gray-200"
              >
                {item}
              </div>
            ))}

            <button className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow">
              View All
            </button>
          </div>
        </div>

        {/* ===== Popular Courses ===== */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Popular courses
            </h2>

            <button className="text-pink-600 font-medium flex items-center gap-1">
              See All →
            </button>
          </div>
          {/* ===== Courses List ===== */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={course.img}
                  alt="Course"
                  className="rounded-lg w-full h-48 object-cover"
                />

                <div className="flex gap-2 mt-3 flex-wrap">
                  {course.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-gray-800 font-semibold mt-3 leading-snug">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                  ₹ {course.price}
                  <span className="line-through text-gray-400 text-sm">
                    ₹ {course.oldPrice}
                  </span>
                  <span className="text-pink-600 text-sm font-bold">
                    {course.discount}
                  </span>
                </div>

                <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition">
                  Get this course
                </button>
              </div>
            ))}
          </div>
          {/* ===== Filter Courses ===== */}
          <div className="max-w-7xl mx-auto px-6 mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Filter courses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* ==== Live Courses ==== */}
              <div className="relative bg-[#db2e84] text-white rounded-2xl p-6 h-40 flex flex-col justify-between cursor-pointer overflow-hidden">
                {/* Background grid pattern effect */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://i.imgur.com/BoN9kdC.png')]"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Live Courses
                </h3>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-2xl">→</span>
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ==== Test Series ==== */}
              <div className="relative bg-[#1557ff] text-white rounded-2xl p-6 h-40 flex flex-col justify-between cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://i.imgur.com/BoN9kdC.png')]"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Test Series
                </h3>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-2xl">→</span>
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path d="M3 5h18v2H3zm0 6h12v2H3zm0 6h18v2H3z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ==== Recorded Courses ==== */}
              <div className="relative bg-[#20a55f] text-white rounded-2xl p-6 h-40 flex flex-col justify-between cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://i.imgur.com/BoN9kdC.png')]"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Recorded Courses
                </h3>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-2xl">→</span>
                  <div className="p-3 bg-white/30 rounded-xl backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CourseSlider title="Recent courses" data={recentCourses} />
          </div>
          <div>
            <CourseSlider title="Featured courses" data={featuredCourses} />
          </div>
          <div className="flex justify-between items-center mt-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              All courses
            </h2>

            <button className="text-pink-600 font-medium flex items-center gap-1">
              See All →
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={course.img}
                  alt="Course"
                  className="rounded-lg w-full h-48 object-cover"
                />

                <div className="flex gap-2 mt-3 flex-wrap">
                  {course.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-gray-800 font-semibold mt-3 leading-snug">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                  ₹ {course.price}
                  <span className="line-through text-gray-400 text-sm">
                    ₹ {course.oldPrice}
                  </span>
                  <span className="text-pink-600 text-sm font-bold">
                    {course.discount}
                  </span>
                </div>

                <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-xl font-medium hover:bg-pink-700 transition">
                  Get this course
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
