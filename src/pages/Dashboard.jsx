import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";


const Dashboard=()=>{
    return(
        <div>
            < Header style /> 
        <div style={{ display: 'block'}} >
      
     <Carousel>
       <Carousel.Item interval={1500} >
         <img
           className="d-block w-100" 
           src="https://wallpaperaccess.com/full/6688225.jpg"     
           alt="Image One"
         />
         
       </Carousel.Item>
       <Carousel.Item interval={500}> 
         <img
           className="d-block w-100"
                src="https://wallpapershome.com/images/pages/ico_h/378.jpg"
           alt="Image Two"
         />
         
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           className="d-block w-100"
                src="https://cdn.wallpapersafari.com/47/98/GP1K73.jpg"
           alt="Image Three"
         />
         
       </Carousel.Item>
     </Carousel>
   </div>
   </div>

    )
}

export default Dashboard;