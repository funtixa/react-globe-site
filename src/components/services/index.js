import React from "react";
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-6.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWraper,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>OurServices</ServicesH1>
        <ServicesWraper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help to grab some Kinah </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={ Icon2 } alt='siema'/>
            <ServicesH2>Reality Pain</ServicesH2>
            <ServicesP>Online from anywhere always !!</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Intelinho Inside</ServicesH2>
            <ServicesP>Always 5% from 10 to eleven</ServicesP>
          </ServicesCard>
        </ServicesWraper>
      </ServicesContainer>
    </>
  );
};

export default Services;
