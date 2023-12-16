import React from "react";
import "./SignUpCard.css";

import LoginPage from "./Login";
import { Link } from "react-router-dom";
import myLogo from "./Images/logo-no-background.png";
import investorImage from "./Images/investor.png";
import entrepreneurImage from "./Images/enterpreneur.jpg";
import skilledPersonImage from "./Images/Skill.jpg";

function HomePage() {
  const boxButtons = [
    { type: "investor", text: "Investor", image: investorImage },
    { type: "entrepreneur", text: "Entrepreneur", image: entrepreneurImage },
    { type: "skilledPerson", text: "Skilled Person", image: skilledPersonImage },
  ];
  const Footer = () => {
    return (
      <footer className="footer">
        <p className="already1">
          &copy; 2023 Buisness partnerships Collaboration. All rights reserved.
        </p>
      </footer>
    );
  };

  const renderBoxButtons = () => {
    return boxButtons.map((button, index) => (
      <Link
      className="Link"
        key={index}
        to={`/${button.text.toLowerCase().replace(" ", "-")}-signup`}
      >
        <div className="boxButton">
          <button>
            <img src={button.image} alt={button.text} />
            <p>{button.text}</p>
          </button>
        </div>
      </Link>
    ));
  };

  const renderContent = (type) => {
    switch (type) {
      case "investor":
        return (
          <div className="contentSection">
            <h2 className="font">Investor</h2>
            <p>
            Investors are like growth partners, not just providing
             money but also sharing expertise, guidance, and networks.
              They're visionaries who spot opportunities, assess risks,
               and actively steer ventures toward success. Beyond financial
                backing, they serve as mentors, catalysts for innovation, and
                 contributors to global economic vitality. In essence, investors
                  are instrumental figures propelling promising ventures to reach their full potential.
            </p>
          </div>
        );
      case "entrepreneur":
        return (
          <div className="contentSection">
            <h2 className="font">Entrepreneur</h2>

            <p>
            An entrepreneur is a visionary innovator, turning ideas
             into reality with passion and determination. They thrive on calculated risks,
              embracing uncertainty for growth. Entrepreneurs navigate challenges, 
              learn from failures, and iterate to refine their offerings. At their core 
              is a spirit of innovation, identifying unmet needs and creating solutions 
              that disrupt or create new markets. As leaders and catalysts of change, 
              entrepreneurs shape industries, inspire, and drive economic progress.
               In essence, they embody courage, resilience, creativity, and leadership,
                spearheading ventures that shape society and the economy.
            </p>
          </div>
        );
      case "skilledPerson":
        return (
          <div className="contentSection">
            <h2 className="font">Skilled Person</h2>
            <p>
            A skilled person is a master in their craft, blending
             inspiring expertise with practical know-how. Whether 
             it's an artist, musician, or scientist, their adeptness 
             comes from dedicated practice and continuous learning. 
             Beyond technical prowess, they showcase creativity, innovation,
              and adaptability. These individuals exude confidence yet remain 
              humble, open to learning and refining their abilities. 
              Their impact resonates through lasting contributions, 
              inspiring others to pursue excellence. Skilled individuals
               are the artisans of our world, elevating their professions
                with exceptional abilities and unwavering dedication.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="myLogo">
        <img src={myLogo} alt="Logo" style={{ marginTop: 10 }} />
      </header>

      <main>
        <h1 className="already1">Choose Category you want to Sign In: </h1>
        <div className="buttonContainer">{renderBoxButtons()}</div>
        <p className="already">
          Already have an account? <Link to="/login"> Login </Link>
        </p>
        <h1 className="already1">Descriptions:</h1>
        <div className="content">
          {renderContent("investor")}
          {renderContent("entrepreneur")}
          {renderContent("skilledPerson")}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
