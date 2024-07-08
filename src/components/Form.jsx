import React from 'react';
import "../assets/css/form.css";
import "../assets/css/reset.css";
import RightComponent from '../components/RightComponent';
import FormComponent from "../components/FormComponent";
import { DiJavascript, DiReact } from 'react-icons/di';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const handleNavigate = (element) => {
    navigate('/learn', { state: { element } });
  };

  return (
    <div>
      <div className="section4">
        <div className="section41 container">
          <div className="search">
            <input id="search" type="search" placeholder='Search Subject' />
            <button id='view'>Search</button>
          </div>
          <div className="latest">
            <div className="topL">
              <span>Latest</span>
              <h2 className="link">Tutorials</h2>
            </div>
            <div className="botL">
              <div className="leftL">
                <FormComponent
                  bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
                  lText="Learning React Native"
                  pText="Learn the basics of React Native development."
                  sText="1hr 24m Advanced Jun 18, 2020"
                  icon1={<DiReact />}
                  icon2={<DiJavascript />}
                  onClick={() => handleNavigate('react')}
                />
                <FormComponent
                  bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
                  lText="Learning Angular"
                  pText="Master the fundamentals of Angular."
                  sText="1hr 24m Advanced Jun 18, 2020"
                  icon1={<DiReact />}
                  icon2={<DiJavascript />}
                  onClick={() => handleNavigate('angular')}
                />
                <FormComponent
                  bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"
                  lText="Learning JavaScript"
                  pText="Dive into JavaScript for web development."
                  sText="1hr 24m Advanced Jun 18, 2020"
                  icon1={<DiReact />}
                  icon2={<DiJavascript />}
                  onClick={() => handleNavigate('javascript')}
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
  );
}

export default Form;
