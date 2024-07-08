import "../assets/css/form.css"
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import FormComponent from "../components/formComponent";
import { RiExpandDiagonal2Fill } from "react-icons/ri";
import { DiReact } from "react-icons/di";
const form = () => {
  return (
    <div>
<div className="section4">
    <div className="section41 container">
<div className="top">
<Form.Control
                            type="text"
                            placeholder="Search Subjects"
                            name="name"
                            required
                        />
</div>
<div className="bottom">
<div className="left"> <FormComponent
                        bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"                        
                        lText="Learning React Native"
                        pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
                        sText=" 1hr 24m Advanced Jun 18, 2020 "
                        icon2={DiReact}
                        /> 
                        <FormComponent
                        bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"                        
                        lText="Learning React Native"
                        pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
                        sText=" 1hr 24m Advanced Jun 18, 2020 "
                        icon1={RiExpandDiagonal2Fill}
                        /> 
                        <FormComponent
                        bg="https://preview.colorlib.com/theme/tutor/images/img_1.jpg"                        
                        lText="Learning React Native"
                        pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore, saepe numquam. Doloremque culpa tenetur facere quisquam, animi illum possimus!"
                        sText=" 1hr 24m Advanced Jun 18, 2020 "
                        /> 
                        </div>
<div className="right"> <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div> <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div> <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div></div>
</div>

    </div>

</div>
    </div>
  )
}

export default form