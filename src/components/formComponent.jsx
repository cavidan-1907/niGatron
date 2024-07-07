import "../assets/css/reset.css";
import "../assets/css/form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function formComponent({bg,lTex,pText,sText,icon1,icon2}) {
  return (
    <div>
          <div className="left">
            <div className="image">
              <img src={{bg}} alt="" />
            </div>
            <div className="text">
           
              <h1>{lTex}</h1>
              <p>
                {pText}
              </p>
              <div className="icon">
                {icon1}
{icon2}
              </div>
              <span>{sText} </span>
              <button variant="primary"> view</button>
            </div>
          </div>
    </div>
  )
}

export default formComponent
