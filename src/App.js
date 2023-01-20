import Auth from "./components/authentication/auth";
import PricingTable from "./components/Pricing/PricingTable";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashborad/Dashboard";
const  App =  ()=>{
  return (
      <div>
        <Router>
            <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/payment" element={<PricingTable/>} />
            <Route path="/dashboard" element={<Dashboard/>} />  
            
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;
