import {React} from "react";

function Cartit(props){
    if(props.checkIfListIsEmpty.length === 0 ){
        return(
             <h1>Nothing on  Watch list</h1>
        )
    }
    return(
        
      <div> 
         {props.viewAllWatchLaterList}
      </div>
 
    )
}

export default Cartit;
