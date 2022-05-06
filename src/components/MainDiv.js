import React from "react";
import Ethbtcchart from "../components/charts/dashboardCharts";
import Carousel from "./Carousel";
import { CoinsTable } from "./Table";
import "./styles/MainDiv.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { tokenFetch } from "../loginHandler/signUp";
import { useState, useEffect } from "react";
import { UserForm } from "../loginHandler/userForm"

const MainDiv = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser)
    console.log("testing user", user)
  }, [user])

  return (
    <div className="LandingPage">
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="Content">
        <div className="CarouselSect">
          <Carousel />
        </div>
        <div className="Charts">
          {user ? <Ethbtcchart /> : <UserForm setUser = {setUser}/>}
          {/* <Ethbtcchart /> */}
        </div>
        <div className="Table">
          <CoinsTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainDiv;
