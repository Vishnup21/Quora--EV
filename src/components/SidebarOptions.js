import React from "react";
import "../css/SidebarOptions.css";


function SidebarOptions() {
    return (
    <div className="sidebarOptions">
       <div className="sidebarOption">
       <img
            src="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
            
            alt=""
       
        />
        <p>ELECTRIC CARS</p>
       </div>
       <div className="sidebarOption">
       <img
            src="https://m.economictimes.com/thumb/msid-83681307,width-1200,height-900,resizemode-4,imgsize-61724/ev-two-wheeler.jpg"
            
            alt=""
       
        />
        <p>ELECTRIC BIKES</p>
       </div>
      
    </div>
    )
}
export default SidebarOptions;