import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

import Globalstyles from "./components/styled/Globalstyle";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from "./components/Search";
import Orders from "./components/Orders";
import Cart from "./Cart";
import Product from "./components/Product";
import SavedList from "./SavedList";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Router basename="/AnEcomersStore">
        <Navbar />
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Orders' element={<Orders height={'10rem'}/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Product/:productID' element={<Product/>} />
        <Route path='/SavedList' element={<SavedList/>} />
        </Routes>
        <Globalstyles />
      </Router>
    </>
  );
}

export default App;
