import React from "react";
import "../../styles/TextElement.css";

const TextElement = ({ label, classActive ,borderRadius}) => {
  return (
    <div
      className="textElementWrapper"
      style={{
        backgroundColor:classActive?"rgba(218, 218, 127, 0.664)":"rgba(214, 205, 205, 0.452)",
        borderRadius:`${borderRadius}`
    }

      }
    >
      <p>{label}</p>
    </div>
  );
};

export default TextElement;
