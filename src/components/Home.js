import React, { useState } from "react";
import ToggleSwitch from "./reusable/ToggleSwitch";
import TextBox from "./reusable/TextBox";
import TextElement from "./reusable/TextElement";
import "../styles/Home.css";
import ShowDetails from "./ShowDetails";

const days = [
  {
    name: "1 Day",
    classActive: true,
  },
  {
    name: "7 Days",
  },
  {
    name: "30 Days",
  },
  {
    name: "1 Year",
  },
  {
    name: "5 Year",
  },
];
const tier = [
  {
    name: "Tier 1",
    classActive: true,
  },
  {
    name: "Tier 2",
  },
  {
    name: "Tier 3",
  },
  {
    name: "Tier 4",
  },
  {
    name: "Tier 5",
  },
];
const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="homeWrapper">
      <div className="firstTextBox">
        <div className="firstTextBox_Button">
          <input type="radio" id="radiobtn" className="radio_button" />
          <p>Cake</p>

          <ToggleSwitch />
          <p>USD</p>
        </div>
        <div className="firstTextBox_input">
          <TextBox placeholder="0.000USD" />

          <span>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextElement label="$1000" borderRadius="8px" />
              <TextElement label="$100" borderRadius="8px" />
            </div>
            <p> ~Cake 0.00</p>
          </span>
        </div>
      </div>
      <div className="timeFrameWrapper">
        <h4>Timeframe</h4>

        <span>
          {days?.map((data) => (
            <TextElement
              label={data.name}
              classActive={data.classActive}
              borderRadius="15px"
            />
          ))}
        </span>
      </div>
      <div className="acceleratedWrapper">
        <span className="acceleratedHeading">
          <h4>Enable Accelerated APY</h4>
          <ToggleSwitch />
        </span>
        <p style={{ margin: "8px", fontWight: "800" }}> Select Tier</p>

        <span>
          {tier?.map((data) => (
            <TextElement
              label={data.name}
              classActive={data.classActive}
              borderRadius="15px"
            />
          ))}
        </span>
      </div>
      <div className="secondTextBox">
        <div className="secondTextBox_Button">
          <p>ROI at Current Rates</p>
        </div>
        <div className="secondTextBox_input">
          <TextBox placeholder="0.00USD" />

          <span>
            <p> 0.000 CAKE + 0.0000000 DON</p>
          </span>
        </div>
      </div>
      <div className="hideDetails">
        <span onClick={() => setShowDetails((prevDisplay) => !prevDisplay)}>
          {showDetails ? <h3>Hide Details ↑ </h3> : <h3>Show Details ↓</h3>}
        </span>
        {showDetails ? <ShowDetails /> : null}
      </div>
    </div>
  );
};

export default Home;
