import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="img spoon" className="spoon__img" />
        <p className="p__opensans">
          Dit is de tekst voor onze about page. Ik waardeer super erg dat je dit leest. En ik maak
          echt geen grapje hierover. Super bedankt voor je support
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="img spoon" className="spoon__img" />
        <p className="p__opensans">
          Dit is de tekst voor onze about page. Ik waardeer super erg dat je dit leest. En ik maak
          echt geen grapje hierover. Super bedankt voor je support
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
