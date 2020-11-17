import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Employess from "./Employees/Employees";
import EmployessBirth from "./Employees/EmployessBirth";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <div className="employees_link">
          <Link to="/employees">Go to employees page</Link>
        </div>
      </Route>
      <Route path="/employees">
        <div className="container">
          <div className="employess_page">
            <Employess />
            <EmployessBirth />
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
