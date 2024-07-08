import React from 'react'
import "../assets/css/form.css"
import "../assets/css/reset.css"
import { Button } from "react-bootstrap";
const FormComponent = ({bg,icon1,icon2,sText,lText,pText}) => {
  return (
    <div className='div'>
      <div className="imageF">
        <img src={bg} alt="" />
      </div>
      <div className="textL">
        <span>{lText}</span>
        <p> {pText}</p>
        <div className="icons">
        {icon1}
        {icon2}
        </div>
        <span>{sText}</span>
        <Button variant="primary">View</Button>
      </div>
    </div>
  )
}

export default FormComponent