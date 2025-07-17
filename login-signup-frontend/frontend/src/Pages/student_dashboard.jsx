import React from "react";

const StudentDashboard = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Student Dashboard</h1>
      <p>This is a secure area after login.</p>

      {/* Sample content */}
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h5 className="card-title">Your Courses</h5>
          <ul>
            <li>Introduction to Computer Science</li>
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
