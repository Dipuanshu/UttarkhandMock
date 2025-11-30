/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CourseDetail from "./CourseDetail";
import LiveCoursePage from "./LiveCoursePage";
import TestSeries from "./TestSeriesPage";
import RecordedCourse from "./RecordedCourse";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="/live-course" element={<LiveCoursePage />} />
        <Route path="/tests-series" element={<TestSeries />} />
        <Route path="/recorde-course" element={<RecordedCourse />} />
      </Routes>
    </>
  );
}
export default App;
