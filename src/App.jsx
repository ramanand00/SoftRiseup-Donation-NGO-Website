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

// Lets Import the courses
import AngularCourse from "./pages/courses/courses/AngularCourse";
// import ReactCourse from "./pages/courses/courses/ReactCourse";
// import VueCourse from "./pages/courses/courses/VueCourse";
// import NodeCourse from "./pages/courses/courses/nodecourse";
// import PythonCourse from "./pages/courses/courses/PythonCourse";
// import JavaCourse from "./pages/courses/courses/JavaCourse";
// import CSharpCourse from "./pages/courses/courses/CSharpCourse";
// import RubyCourse from "./pages/courses/courses/RubyCourse";
// import SwiftCourse from "./pages/courses/courses/SwiftCourse";
// import GoCourse from "./pages/courses/courses/GoCourse";
// import KotlinCourse from "./pages/courses/courses/KotlinCourse";
// import PHPCourse from "./pages/courses/courses/phpcourse";
// import JavaScriptCourse from "./pages/courses/courses/JavaScriptCourse";
// import TypeScriptCourse from "./pages/courses/courses/TypeScriptCourse";
// import HTMLCourse from "./pages/courses/courses/htmlcourse";
// import CSSCourse from "./pages/courses/courses/csscourse";
// import SQLCourse from "./pages/courses/courses/sqlcourse";
// import MongoDBCourse from "./pages/courses/courses/mongodbcourse";
// import MySQLCourse from "./pages/courses/courses/mysqlcourse";
// import PostgreSQLCourse from "./pages/courses/courses/postgresqlcourse";
// import OracleCourse from "./pages/courses/courses/oracle";
// import SQLiteCourse from "./pages/courses/courses/sqlite";
// import RedisCourse from "./pages/courses/courses/redis";
// import MemcachedCourse from "./pages/courses/courses/memcached";
// import ElasticsearchCourse from "./pages/courses/courses/elasticsearch";
// import RabbitMQCourse from "./pages/courses/courses/rabbitmq";
// import KafkaCourse from "./pages/courses/courses/kafka";
// import ApacheKafkaCourse from "./pages/courses/courses/apache-kafka";
// import ApacheSparkCourse from "./pages/courses/courses/apache-spark";
// import ApacheHadoopCourse from "./pages/courses/courses/apache-hadoop";
// import ApacheStormCourse from "./pages/courses/courses/apache-storm";
// import ApacheFlinkCourse from "./pages/courses/courses/apache-flink";
// import ApacheBeamCourse from "./pages/courses/courses/apache-beam";
// import ApacheAirflowCourse from "./pages/courses/courses/apache-airflow";
// import ApacheCamelCourse from "./pages/courses/courses/apache-camel";
// import ApacheKnoxCourse from "./pages/courses/courses/apache-knox";
// import ApacheKylinCourse from "./pages/courses/courses/apache-kylin";

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

        {/* let's import the courses */}
        <Route exact path="/courses/angular" element={<AngularCourse />} />
        {/* <Route exact path="/courses/react" element={<ReactCourse />} /> */}
        {/* <Route exact path="/courses/vue" element={<VueCourse />} /> */}
        {/* <Route exact path="/courses/node" element={<NodeCourse />} /> */}
        {/* <Route exact path="/courses/python" element={<PythonCourse />} /> */}
        {/* <Route exact path="/courses/java" element={<JavaCourse />} /> */}
        {/* <Route exact path="/courses/csharp" element={<CSharpCourse />} /> */}
        {/* <Route exact path="/courses/ruby" element={<RubyCourse />} /> */}
        {/* <Route exact path="/courses/swift" element={<SwiftCourse />} /> */}
        {/* <Route exact path="/courses/go" element={<GoCourse />} /> */}
        {/* <Route exact path="/courses/kotlin" element={<KotlinCourse />} /> */}
        {/* <Route exact path="/courses/php" element={<PHPCourse />} /> */}
        {/* <Route exact path="/courses/javascript" element={<JavaScriptCourse />} /> */}
        {/* <Route exact path="/courses/typescript" element={<TypeScriptCourse />} /> */}
        {/* <Route exact path="/courses/html" element={<HTMLCourse />} /> */}
        {/* <Route exact path="/courses/css" element={<CSSCourse />} /> */}
        {/* <Route exact path="/courses/sql" element={<SQLCourse />} /> */}
        {/* <Route exact path="/courses/mongodb" element={<MongoDBCourse />} /> */}
        {/* <Route exact path="/courses/mysql" element={<MySQLCourse />} /> */}
        {/* <Route exact path="/courses/postgresql" element={<PostgreSQLCourse />} /> */}
        {/* <Route exact path="/courses/oracle" element={<OracleCourse />} />
        <Route exact path="/courses/sqlite" element={<SQLiteCourse />} />
        <Route exact path="/courses/redis" element={<RedisCourse />} />
        <Route exact path="/courses/memcached" element={<MemcachedCourse />} />
        <Route exact path="/courses/elasticsearch" element={<ElasticsearchCourse />} />
        <Route exact path="/courses/rabbitmq" element={<RabbitMQCourse />} />
        <Route exact path="/courses/kafka" element={<KafkaCourse />} />
        <Route exact path="/courses/apache-kafka" element={<ApacheKafkaCourse />} />
        <Route exact path="/courses/apache-spark" element={<ApacheSparkCourse />} />
        <Route exact path="/courses/apache-hadoop" element={<ApacheHadoopCourse />} />
        <Route exact path="/courses/apache-storm" element={<ApacheStormCourse />} />
        <Route exact path="/courses/apache-flink" element={<ApacheFlinkCourse />} />
        <Route exact path="/courses/apache-beam" element={<ApacheBeamCourse />} />
        <Route exact path="/courses/apache-airflow" element={<ApacheAirflowCourse />} />
        <Route exact path="/courses/apache-camel" element={<ApacheCamelCourse />} />
        <Route exact path="/courses/apache-knox" element={<ApacheKnoxCourse />} />
        <Route exact path="/courses/apache-kylin" element={<ApacheKylinCourse />} /> */}

      </Routes>
    </BrowserRouter>
  );
}
