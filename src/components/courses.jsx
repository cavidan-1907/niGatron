import "../assets/css/reset.css"
import { FaVuejs } from "react-icons/fa6";
import { DiIllustrator, DiPhotoshop, DiAngularSimple,DiJavascript,DiReact} from "react-icons/di"
import "../assets/css/courses.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function courses() {
  return (
    <div>
        <section className="section3">
            <div className="container section31">
            <div className="top">
                    <span>Tutorial Courses</span>
                     <h2  className="link">Choose Course</h2>
            </div>
            <div className="bottom col-lg-2"><div className="icona card"><DiIllustrator style={{color:'#ff7c00'}} /> <p>illustrator</p></div>
<div className="icona card"><DiPhotoshop style={{color:'#00c8ff'}}/><p>Photoshop</p> </div>
<div className="icona card"><DiAngularSimple  style={{color:'#dd0031'}} /> <p>Angular</p> </div>
<div className="icona card"><DiJavascript style={{color:'#f7df1e'}} /> <p>Javascript</p> </div>
<div className="icona card"><DiReact style={{color:'#61dafb'}} /> <p>React</p> </div>
<div className="icona card"><FaVuejs style={{color:'#4fc08d'}} /> <p>Vue</p> </div> </div>

            </div>


</section>

    </div>
  )
}

export default courses