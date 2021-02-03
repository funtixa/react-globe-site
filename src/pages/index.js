import React, { useState }from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne , homeObjTwo, homeObjThree,homeObjFour, homeObjFive, homeObjSix} from "../components/InfoSection/data";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
      <InfoSection {...homeObjSix}/>

    </>
  );
};

export default Home;
