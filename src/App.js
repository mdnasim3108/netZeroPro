import Auth from "./components/authentication/auth";
import PricingTable from "./components/Pricing/PricingTable";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";

const  App =  ()=>{
  return (
      <div>
        <Router>
            <Routes>
                <Route path="/" element={<Auth/>} />
                <Route path="/payment" element={<PricingTable/>} />
                <Route path="/home" element={<Home/>} /> 
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;
