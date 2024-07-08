import React from 'react'
import "../assets/css/form.css"
import "../assets/css/reset.css"
import RightComponent from '../components/RightComponent';
import FormComponent from "../components/FormComponent";
import { DiJavascript, DiReact } from 'react-icons/di';
function Form() {
  return (
    <div>
<div className="section4">
  <div className="section41 container">
<div className="search"><input id="search" type="search" placeholder='Search Subject' />
<button id='view'>Search</button>
</div>
<div className="latest">
  <div className="topL">    <span>Latest</span>
  <h2  className="link">Tutorials</h2></div>
  <div className="botL">
    <div className="leftL">

    <FormComponent
              bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
              lText="Learning React Native"
              pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
              sText=" 1hr 24m Advanced Jun 18, 2020 "
              icon1={<DiReact />}
              icon2={<DiJavascript />}
            />
               <FormComponent
              bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
              lText="Learning React Native"
              pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
              sText=" 1hr 24m Advanced Jun 18, 2020 "
              icon1={<DiReact />}
              icon2={<DiJavascript />}
            />
               <FormComponent
              bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
              lText="Learning React Native"
              pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
              sText=" 1hr 24m Advanced Jun 18, 2020 "
              icon1={<DiReact />}
              icon2={<DiJavascript />}
            />
    </div>
    <div className="rightL">
    <RightComponent imgSrc="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" title="Learning React Native" />
    <RightComponent imgSrc="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" title="Learning React Native" />
    <RightComponent imgSrc="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" title="Learning React Native" />
    </div>
  </div>
</div>

  </div>
</div>

    </div>
  )
}

export default Form