import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import BenifitPage from "./Pages/BenifitPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation happens only once as you scroll
    });
  }, []);


  return (
<>

<div>


<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Benifit" element={<BenifitPage />} />
        <Route path="/ABoutPage" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
 
      </Routes>
    </Router>




</div>

</>
  )
}

export default App