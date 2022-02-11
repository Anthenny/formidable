import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Ik ben de chef van formidabler en dit is mijn quote. Ik hoop dat deze site naar jouw
            wensen is ouleh
          </p>
        </div>
        <p className="p__opensans">
          Hier kun je veel tekst lezen wat later nog beter gaat zijn. Oukeh adida asia asikais aikas
          aisask
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>

        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
