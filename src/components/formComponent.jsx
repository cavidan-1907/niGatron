import "../assets/css/reset.css";
import "../assets/css/form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
function formComponent({bg,lText,pText,sText,icon1,icon2}) {
  return (
    <div>
          <div className="left">
            <div className="image">
              <img src={bg} alt="" />
            </div>
            <div className="text">
           
              <h1>{lText}</h1>
              <p>
                {pText}
              </p>
              <div className="icon">
                {icon1}
{icon2}
              </div>
              <span>{sText} </span>
              <Button variant="primary"> view</Button>
            </div>
          </div>
    </div>
  )
}

export default formComponent
