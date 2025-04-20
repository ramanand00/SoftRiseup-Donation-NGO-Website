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

//CSIT Semister Courses
import Csit1 from "./BachelorBlogs/Csit1/Csit1";
import Csit2 from "./BachelorBlogs/Csit2/Csit2";
import Csit3 from "./BachelorBlogs/Csit3/Csit3";
import Csit4 from "./BachelorBlogs/Csit4/Csit4";
import Csit5 from "./BachelorBlogs/Csit5/Csit5";
import Csit6 from "./BachelorBlogs/Csit6/Csit6";
import Csit7 from "./BachelorBlogs/Csit7/Csit7";
import Csit8 from "./BachelorBlogs/Csit8/Csit8";

// Lets Import the courses
import AngularCourse from "./pages/courses/courses/AngularCourse";
import BootstrapCourse from "./pages/courses/courses/BootstrapCourse";
import CCourse from "./pages/courses/courses/CCourse";
import CCSharpCourse from "./pages/courses/courses/CSharpCourse";
import GoCourse from "./pages/courses/courses/GoCourse";
import JavaCourse from "./pages/courses/courses/JavaCourse";
import JavaScriptCourse from "./pages/courses/courses/JavaScriptCourse";
import KotlinCourse from "./pages/courses/courses/KotlinCourse";
import NextCourse from "./pages/courses/courses/NextCourse";
import PythonCourse from "./pages/courses/courses/PythonCourse";
import ReactCourse from "./pages/courses/courses/ReactCourse";
import RubyCourse from "./pages/courses/courses/RubyCourse";
import RustCourse from "./pages/courses/courses/RustCourse";
import SwiftCourse from "./pages/courses/courses/SwiftCourse";
import TailwindCourse from "./pages/courses/courses/TailwindCourse";
import TypeScriptCourse from "./pages/courses/courses/TypeScriptCourse";
import VueCourse from "./pages/courses/courses/VueCourse";

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
        <Route exact path="/BSc.CSIT" element={<Csit />} />
        <Route exact path="/bit" element={<Bit />} />
        <Route exact path="/bca" element={<Bca />} />
        <Route exact path="/computer-engineering" element={<Computereng />} />

        {/* CSIT Semister Courses */}
        <Route exact path="/BSc.CSIT/csit1" element={<Csit1 />} />
        <Route exact path="/BSc.CSIT/csit2" element={<Csit2 />} />
        <Route exact path="/BSc.CSIT/csit3" element={<Csit3 />} />
        <Route exact path="/BSc.CSIT/csit4" element={<Csit4 />} />
        <Route exact path="/BSc.CSIT/csit5" element={<Csit5 />} />
        <Route exact path="/BSc.CSIT/csit6" element={<Csit6 />} />
        <Route exact path="/BSc.CSIT/csit7" element={<Csit7 />} />
        <Route exact path="/BSc.CSIT/csit8" element={<Csit8 />} />

        {/* let's import the courses */}
        <Route exact path="/courses/angular" element={<AngularCourse />} />
        <Route exact path="/courses/bootstrap" element={<BootstrapCourse />} />
        <Route exact path="/courses/c" element={<CCourse />} />
        <Route exact path="/courses/c-sharp" element={<CCSharpCourse />} />
        <Route exact path="/courses/go" element={<GoCourse />} />
        <Route exact path="/courses/java" element={<JavaCourse />} />
        <Route exact path="/courses/javascript" element={<JavaScriptCourse />} />
        <Route exact path="/courses/kotlin" element={<KotlinCourse />} />
        <Route exact path="/courses/next" element={<NextCourse />} />
        <Route exact path="/courses/python" element={<PythonCourse />} />
        <Route exact path="/courses/react" element={<ReactCourse />} />
        <Route exact path="/courses/ruby" element={<RubyCourse />} />
        <Route exact path="/courses/rust" element={<RustCourse />} />
        <Route exact path="/courses/swift" element={<SwiftCourse />} />
        <Route exact path="/courses/tailwind" element={<TailwindCourse />} />
        <Route exact path="/courses/typescript" element={<TypeScriptCourse />} />
        <Route exact path="/courses/vue" element={<VueCourse />} />
      </Routes>
    </BrowserRouter>
  );
}
