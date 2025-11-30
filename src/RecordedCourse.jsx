/** @format */
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const liveCoursesData = [
  {
    img: "https://ali-cdn-wl-assets.classplus.co/production/single/puesw/3126ec97-d300-4b8e-abc7-0a9431db94d4.jpg",
    title: "New Combo Course (complete course) for UKPSC & UKSSSC",
    price: 1544,
    oldPrice: 4999,
    discount: "69% OFF",
  },
  {
    img: "https://ali-cdn-wl-assets.classplus.co/production/single/puesw/5a7c7fc0-003f-436c-a61d-35bd1fe646bb.jpg",
    title:
      "1000+ GS most Important questions with fact (1000+ महत्वपूर्ण प्रश्न)",
    price: 48,
    oldPrice: 299,
    discount: "83% OFF",
  },
  {
    img: "https://ali-cdn-wl-assets.classplus.co/production/single/puesw/dadb4c63-061e-4f2f-8be4-47024e61d166.jpg",
    title: "Only Computer Complete Course for UKSSSC/UKPSC Exams",
    price: 341,
    oldPrice: 1999,
    discount: "82% OFF",
  },
  {
    img: "https://ali-cdn-wl-assets.classplus.co/production/single/puesw/51b6817c-e751-4d10-8841-0a668924c7fe.jpg",
    title: "NIELIT CCC Exam and Computer course Tests",
    price: 48,
    oldPrice: 599,
    discount: "91% OFF",
  },
];

const RecordedCourse = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = liveCoursesData.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for courses"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-3 bg-gray-100 rounded-xl outline-none"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Live Courses
        </h2>

        {/* 2 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white border shadow rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={course.img}
                className="w-full h-56 object-cover rounded-lg"
                alt="course"
              />

              <h3 className="mt-3 font-semibold text-gray-800 leading-snug">
                {course.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-lg font-semibold text-gray-700">
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

      <Footer />
    </>
  );
};

export default RecordedCourse;
