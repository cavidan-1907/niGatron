
import { Link } from 'react-router-dom';
import { DiJavascript, DiReact } from 'react-icons/di';
import "../assets/css/tutorial.css";

export default function Tutorial() {
  return (
    <div>
      <div className="section2">
        <div className="container section21">
          <div className="left">
            <div className="image">
              <img src="https://preview.colorlib.com/theme/tutor/images/img_1.jpg" alt="" />
            </div>
            <div className="text">
              <Link to="#">Tutorial</Link>
              <h1>Learning React Native</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quidem excepturi velit illo ratione et quia tenetur odit eveniet sit nulla vero repellat laboriosam ipsam, amet, facere placeat est voluptate.
              </p>
              <div className="icon">
                <DiReact className='rt' />
                <DiJavascript className='js'/>
              </div>
              <span> 1hr 24m Advanced Jun 18, 2020 </span>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div>
            <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div>
            <div className="top">
              <div className="img">
                <img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" alt="" />
              </div>
              <div className="text">
                <Link to="#">Tutorial</Link>
                <h4>Learning React Native</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
