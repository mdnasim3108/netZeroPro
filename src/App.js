import Auth from "./components/authentication/auth";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashborad/Dashboard";
const  App =  ()=>{
  return (
      <div>
        <Router>
            <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/dashboard" element={<Dashboard/>} />  
            {/* <Route path="/" element={<Auth/>} /> */}
            </Routes>
        </Router>
      </div>
   
  );
}

export default App;
