import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/form.css";

function RightComponent({ imgSrc, title }) {
  return (
    <div className="top1">
      <div className="img1">
        <img src={imgSrc} alt="" />
      </div>
      <div className="text1">
        <Link to="#">Tutorial</Link>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default RightComponent;
