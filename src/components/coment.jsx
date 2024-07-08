import React from 'react';
import "../assets/css/test.css";

function Coment({ name, icon1, icon2, icon3, icon4, icon5, pText, img, nam, work }) {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-icon">
          {icon1}
          {icon2}
          {icon3}
          {icon4}
          {icon5}
        </div>
        <h3>{name}</h3>
      </div>
      <p className="comment-text">{pText}</p>
      <div className="comment-user">
        <img src={img} alt={nam} className="comment-img" />
        <div className="comment-info">
          <h4>{nam}</h4>
          <span>{work}</span>
        </div>
      </div>
    </div>
  );
}

export default Coment;
