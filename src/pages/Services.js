import React from "react";
import { MyContext } from "../pages/Home";
import InfoSection from "../components/InfoSection";
import { InfoData, InfoDataTwo, InfoDataThree } from "../data/InfoData";

const Services = () => {
  return <InfoSection {...InfoData} />;
};

export default Services;