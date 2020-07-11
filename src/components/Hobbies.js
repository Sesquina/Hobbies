import React from "react";

const customStyle = {
  color: "purple",
  fontSize: "20px",
};

function Favorite(props) {
  return (
    <div style={customStyle}>
      <h2>{props.hobby}</h2>
      <img src={props.img} />
      <p>{props.details}</p>
    </div>
  );
}
export default Favorite;
