import React from "react";


const students = () => {
    return(
        <div>
            <h2>List of Students</h2>
        <div class="student">
            <h3>John Doe</h3>
            <p>Program: Computer Science</p>
            <p>CGPA: 8.5</p>
            <p>Contact: john.doe@example.com</p>
        </div>
        <div class="student">
            <h3>Jane Smith</h3>
            <p>Program: Electrical Engineering</p>
            <p>CGPA: 8.0</p>
            <p>Contact: jane.smith@example.com</p>
        </div>
        </div>
    );
};
export default students;
