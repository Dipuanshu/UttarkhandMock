/** @format */

import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CourseDetail from "./CourseDetail";
import LiveCoursePage from "./LiveCoursePage";
import TestSeries from "./TestSeriesPage";
import RecordedCourse from "./RecordedCourse";
import PaymentPage from "./PaymentPage";
import AdminDashboard from "./AdminDashboard";
import NotesPage from "./NotesPage";
import MockTestPage from "./MockTestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/live-course" element={<LiveCoursePage />} />
        <Route path="/tests-series" element={<TestSeries />} />
        <Route path="/recorde-course" element={<RecordedCourse />} />
        <Route path="/payment-checkout" element={<PaymentPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/tests" element={<MockTestPage />} />
      </Routes>
    </>
  );
}

export default App;
