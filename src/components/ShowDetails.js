import React from "react";

const ShowDetails = () => {
  return (
    <div className="showDetailsWrapper">
        <div className="showDetailsHeading">
        <h4 style={{ marginLeft: "40px" }}>APY</h4>
<h4 style={{color:"#CCCC00"}}>9.0%</h4>
            </div>
      <ul >
        <li>
            <p>Calculated based on current rates</p>
            </li>

        <li>
          <p>
            All figures are estimates provide for your convenience only, and by
            no  means represent guaranteed returns.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ShowDetails;
