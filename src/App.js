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
import Greetings from "views/TicketBooking/Greetings";
import BloggerHome from "views/BloggerApp/Home";
import ComplaintRegister from "views/TicketRaisingApp/ComplaintRegister";
import MailRegister from 'views/MailRegisterApp/Register'
import EmployeeForm from "views/EmployeeForm/EmployeeForm";
import FetchUser from "views/FetchUserApp/FetchUser";

const officeSpaceList = [
  { name: "DBS", rent: 40000, address: "Chennai" },
  { name: "SKD", rent: 90000, address: "Bangalore" },
  { name: "GBS", rent: 20000, address: "Kolkata" },
  { name: "SED", rent: 100000, address: "Pune" },
];

function App() {
  return (
    <div className="App">
      <FetchUser />
    </div>
  );
}
export default App;
