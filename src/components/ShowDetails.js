import React from "react";

const ShowDetails = () => {
  return (
    <div className="showDetailsWrapper">
      <h4 style={{ marginLeft: "40px" }}>APY</h4>
      <ul style={{listStyleType:"disc"}}>
        <li>Calculated based on current values</li>

        <li>
          <p>
            All figures are estimates provide for you convenience only, and by
            no means represent guaranteed returns.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ShowDetails;
