import Auth from "./components/authentication/auth";
// import PricingTable from "./components/Pricing/PricingTable";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
// import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import SectionA from "./components/navbar/SectionA";

const  App =  ()=>{
  return (
      <div>
        <Router>
            <Routes>
                <Route path="/" element={<Auth/>} />
                {/* <Route path="/payment" element={<PricingTable/>} /> */}
                <Route path="/home" element={<NavBar/>} /> 
                <Route path="/sectionA" element={<SectionA/>} /> 
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;

