import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Courses from "./components/Courses";
import ReactCourse from './pages/courses/ReactCourse';
import PythonCourse from './pages/courses/PythonCourse';
import BootstrapCourse from './pages/courses/BootstrapCourse';
import TailwindCourse from './pages/courses/TailwindCourse';
// import "./index.html";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/courses/react" element={<ReactCourse />} />
        <Route exact path="/courses/python" element={<PythonCourse />} />
        <Route exact path="/courses/bootstrap" element={<BootstrapCourse />} />
        <Route exact path="/courses/tailwind" element={<TailwindCourse />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
