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
import Part2 from "./components/sections/Part2";
import Part4 from "./components/sections/Part4";


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
                
                <Route path="/part2" element={<Part2/>} /> 
                <Route path="/part4" element={<Part4/>} /> 
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;

