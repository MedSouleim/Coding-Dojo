import React from "react";

const Display = ({ color }) => {
  return (
    <ul>
      {color.map((oneColor, idx) => {
        console.log(oneColor)
        return (
          <li key={idx}>
            <p style={{backgroundColor :oneColor.body ,width : oneColor.taille+"px",height:oneColor.taille+"px"}}>{oneColor.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Display;