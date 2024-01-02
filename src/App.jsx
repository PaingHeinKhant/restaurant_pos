import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <div className="container-fluid base-bg-two">
        <div className="row">
          <div className="col-1 p-0">
            <Sidebar />
          </div>
          <div className="col-11 p-0">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
