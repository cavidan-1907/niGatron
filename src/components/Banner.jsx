import "../assets/css/banner.css"
import "../assets/css/reset.css"
export default function Banner({text}) {
  return (
    <div>
      <section className="section1"> 
        <div className="container section11">
        <h1>{text}</h1>
        </div>
      </section>
    </div>
  )
}
