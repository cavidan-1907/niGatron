import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from "./pages/Home";
import Learn from './components/Learn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/learn" element={<Learn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
