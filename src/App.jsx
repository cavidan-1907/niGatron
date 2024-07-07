
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <>
        <Layout />
        <Home/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/disabled" element={<Disabled />} />
        </Routes> */}
      </>
    </Router>
  );
}

export default App;
