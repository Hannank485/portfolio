import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Project from "./components/project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </>
  );
}

export default App;
