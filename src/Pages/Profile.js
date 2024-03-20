import React from "react";



const Profile = () => {
   return(
    <div>  
        <div className="admin-profile">
    <h2>Admin Profile</h2>
    <div className="profile-info">
        <label>Name:</label>
        <p>Admin Name</p>
    </div>
    <div className="profile-info">
        <label>Email:</label>
        <p>admin@example.com</p>
    </div>
    <div className="profile-info">
        <label>Phone:</label>
        <p>123-456-7890</p>
    </div>
    <div className="profile-info">
        <label>Address:</label>
        <p>123 Main Street, City, Country</p>
    </div>
    <div className="profile-info">
        <label>Bio:</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    
</div>
        </div>
    );
};
          export default Profile;