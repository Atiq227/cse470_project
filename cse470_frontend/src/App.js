import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slideshow from './slide';
import './App.css';
import Login from './login'; // Import your Login component
import Signup from './signup'; // Import your Signup component

import ChefDashboard from "./components/ChefDashboard";
import "./styles.css";

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for the homepage */}
                <Route path="/" element={<HomePage />} />
                {/* Route for the login page */}
                <Route path="/login" element={<Login />} />
                {/* Route for the signup page */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

// HomePage component: contains the homepage content
function HomePage() {
    return (
        <div className="App">
            <header>
                <h1>Welcome to xyz Cafeteria</h1>
                <button className="staff-login">Staff Login</button>
            </header>
            <Slideshow />
            <h1>
                <Link to="/login">
                    <button>Want to order something?</button>
                </Link>
            </h1>
            {/* Removed the signup button */}
        </div>
    );
}

const App = () => {
  return (
    <div>
      <h1>Cafeteria Management System</h1>
      <ChefDashboard />
    </div>
  );
};


export default App;
