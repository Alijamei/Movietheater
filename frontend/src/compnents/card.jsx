import {React,useState} from "react";
import "./cards.css";

function Card(props){
    const [start,torf] = useState (props.valueo)
    const [smh,end] = useState (props.change)
  function pressed() {
           window.location.reload()
           props.herecallit(props.soon,props.title,props.image,props.quantity,props.info);
        
    
     }
  
      function Remove() {
        
           
         props.hereremove(props.id);
        
        console.log(props.id)
      
      }
      
  return(
    
   
      
         <div className={ "cards" }  style={props.stylecard}>
            <img className="imagescar"  style={props.style}  src={props.image} />
             <div className="cardinfo" style={props.styleofcardinfo}>
                <p className="comingsoon" style={props.styleofsoon}>{props.soon}</p>
                <h2 className ="movietitle" style={props.styleoftitle}>{props.title}</h2>
                <p className="movieinfosoon" style={props.styleinfo}> {props.info} </p>
                 {/* { start ? <button onClick={pressed}  style={props.buttonstyle} >{props.button}{props.press}</button> : null}            */}
                { smh ? <i  onClick={Remove}  className={props.remove}> </i> : null} 
                 { smh ?  <p>{props.quantity}</p> : <p style={{display:'none'}}>{props.quantity}</p>}
                 { start ? <i onClick={pressed}  className={props.icon}></i> : null}   
             </div>
            </div> 
       
    );
}
export default Card;


{/* <div className={ "cards" + ( props.cardss ? props.cardss : "")}  style={props.stylecard}> */}