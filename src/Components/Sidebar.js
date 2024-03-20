import React from "react";
import { NavLink } from "react-router-dom";


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:'/',
            name:"Dashboard",
            
        },
        {
            path:'/profile',
            name:"Profile",
            
        },
        {
            path:'/students',
            name:"Students",
           
        },
        {
            path:'/companies',
            name:"Companies",
            
        },
        {
            path:'/jobpostings',
            name:"Jobpostings",
           
        },
        {
            path:'/events',
            name:"Events",
            
        },
        { 
            path:'/logout',        
            name:"Logout",
            
        },
        
    ]
     
    return(
        <div className="container">
        <div className="sidebar">
            <div className="top_selection">
               <h1 className="logo">Welcome Admin!!!!</h1>
               </div>
              
               {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
               }
           </div> 

               <main>{children}</main>
           </div>

               
              
    );

};
 export default Sidebar;