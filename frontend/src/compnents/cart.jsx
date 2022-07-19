import {React,useState} from "react";

function Cartit(props){
    if(props.inti.length === 0 ){
        return(
             <h1>Nothing on  Watch list</h1>
        )
    }
    return(
        
      <div> 
         {props.mapp}
      </div>
 
    )
}

export default Cartit;
