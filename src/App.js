/* eslint-disable react/react-in-jsx-scope */
import logo from "./logo.svg";
import "./App.css";

//components
import Home from "views/Home/Home";
import About from "views/Home/About";
import Contact from "views/Home/Contact";

import CalculateScore from 'Components/CalculateScore'

import OnlineShopping from 'views/OnlineShopping/OnlineShopping';
import CounterApp from 'views/CounterApp/CounterApp'


function App() {
  return (
    <div className="App">
      <Home titleText={"Home"} />
      <CounterApp />
    </div>


  );
}

export default App;
