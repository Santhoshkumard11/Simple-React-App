/* eslint-disable react/react-in-jsx-scope */
import logo from "./logo.svg";
import "./App.css";

//components
import Home from "views/Home/Home";
import About from "views/Home/About";
import Contact from "views/Home/Contact";

import CalculateScore from "Components/CalculateScore";

import OnlineShopping from "views/OnlineShopping/OnlineShopping";
import CounterApp from "views/CounterApp/CounterApp";
import CricketApp from "views/CricketApp/CricketApp";
import OfficeSpace from "views/OfficeSpace/OfficeSpace";
import CurrencyConvertor from "views/CurrencyConvertor/CurrencyConvertor";

const officeSpace = { name: "DBS", rent: 60000, address: "Chennai" };

function App() {
  return (
    <div className="App">
      <CurrencyConvertor />
    </div>
  );
}
export default App;
