import React from 'react';
import NavBar from './NavBar/NavBar';
import background from "../images/homebg.jpeg";

function Home(){
    return(
        <div  style={ {backgroundImage:`url(${background})` ,height:"800px",position:"fixed",width:"100%",paddingBottom:"20px" }}>
            <NavBar/>
        <div style={{margin:"50px"}}>
            
            <h2 style={{color:"#3c3a54",fontSize:"50px", paddingTop:"30px"}}>Welcome to Vehicle Management System </h2>
        </div>
        </div>
    )
}

export default Home;
