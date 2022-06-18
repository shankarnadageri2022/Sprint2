import React from "react";
import img3 from "../images/img3.png";
import NavBar from "./NavBar";
function Home(){
    return(
        <div style={{backgroundImage:`URL(${img3})`,height:"800px"}}>
           <div>
           <NavBar/>
           </div >
           <div style={{paddingTop:"60px"}}>
            <h3>Welcome</h3>
            </div>
        </div>
    )
}
export default Home;