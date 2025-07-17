import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPageInline";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import StudentDashboard from './Pages/student_dashboard';
// import LoginPage from "./Pages/LoginPage";


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/student_dashboard" element={<StudentDashboard />} />
     
    </Routes>
  </Router>
);

export default App;
