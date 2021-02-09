/* eslint-disable react/react-in-jsx-scope */
import logo from "./logo.svg";
import "./App.css";

//components
import Home from "views/Home/Home";
import About from "views/Home/About";
import Contact from "views/Home/Contact";

import CalculateScore from 'Components/CalculateScore'

function App() {
  return (
    <div className="App">
      <Home titleText={"Home"} />
      <Home titleText={"About"} />
      <Home titleText={"Contact"} />

      <CalculateScore Name={"Steeve"}
        School={"DNV Public School"}
        total={235} goal={3}/>

    </div>
  );
}

export default App;
