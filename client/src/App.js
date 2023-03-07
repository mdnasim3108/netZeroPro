import Auth from "./components/authentication/auth";
// import PricingTable from "./components/Pricing/PricingTable";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
// import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import { Helmet } from "react-helmet";
import SectionA from "./components/sections/SectionA";
import "./App.css";
import SectionB from "./components/sections/SectionB";
import SectionC from "./components/sections/Part1";


const  App =  ()=>{
  return (
      <div>
        <Helmet>
        <title>NetZeroThink</title>
      </Helmet>
        <Router>
            <Routes>
                {/* <Route path="/" element={<Auth/>} /> */}
                {/* <Route path="/payment" element={<PricingTable/>} /> */}
                <Route path="/home" element={<NavBar/>} /> 
                <Route path="/sectionA" element={<SectionA/>} /> 
                <Route path="/sectionB" element={<SectionB/>} /> 
                <Route path="/sectionC" element={<SectionC/>} /> 
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;

