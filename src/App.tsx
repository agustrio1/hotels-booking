import Navbar from "./components/commons/navbar/Navbar";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <div className="container">
          <Layout />
        </div>
      </Router>
    </div>
  );
};

export default App;
