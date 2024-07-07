import "../assets/css/form.css"
import { Form, Button } from 'react-bootstrap';
import formComponent from "../components/formComponent";
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
                        <Button variant="primary"></Button>
</div>
<div className="bottom"></div>

    </div>

</div>
    </div>
  )
}

export default form