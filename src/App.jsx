import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Courses from "./pages/courses/Courses";
import CourseDetails from "./pages/courses/CourseDetails";

// Bachelor Courses
import Csit from "./pages/BatchelorCourses/Csit";
import Bit from "./pages/BatchelorCourses/Bit";
import Bca from "./pages/BatchelorCourses/Bca";
import Computereng from "./pages/BatchelorCourses/Computereng";

// Lets Import the courses
import AngularCourse from "./pages/courses/courses/AngularCourse";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/courses/:courseId" element={<CourseDetails />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />

        {/* let's import the batchelor courses */}
        <Route exact path="/csit" element={<Csit />} />
        <Route exact path="/bit" element={<Bit />} />
        <Route exact path="/bca" element={<Bca />} />
        <Route exact path="/computer-engineering" element={<Computereng />} />

        {/* let's import the courses */}
        <Route exact path="/courses/angular" element={<AngularCourse />} />
      </Routes>
    </BrowserRouter>
  );
}
