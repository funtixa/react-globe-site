import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWraper,
  Icon1,
  ServicesH2,
  ServicesP,
  Icon2,
  ServicesCard,
  ServicesIcon,
  Icon3,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>OurServices</ServicesH1>
        <ServicesWraper>
          <ServicesCard>
            <ServicesIcon scr={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help to grab some Kinah from pirates</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon scr={Icon2} />
            <ServicesH2>Reality Pain</ServicesH2>
            <ServicesP>Online from anywhere always !!</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon scr={Icon3} />
            <ServicesH2>Intelinho Inside</ServicesH2>
            <ServicesP>Always 5% from 10 to eleven</ServicesP>
          </ServicesCard>
        </ServicesWraper>
      </ServicesContainer>
    </>
  );
};

export default Services;
