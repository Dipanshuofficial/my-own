import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Homepage from "./pages/Homepage";
import Services from "./pages/servicesPage";
import ContactUs from "./pages/ContactusPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
