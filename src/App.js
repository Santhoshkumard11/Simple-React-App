/* eslint-disable react/react-in-jsx-scope */
import logo from "./logo.svg";
import "./App.css";

import Home from "views/Home/Home";
import About from "views/Home/About";
import Contact from "views/Home/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
