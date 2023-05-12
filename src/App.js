
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import Service from "./routes/Service"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
      </Routes>

    </div>
  );
}

export default App;
