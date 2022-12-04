import {React,useState} from "react";
import "./cards.css";

function Card(props){
    const [addMovieStatus,setaddMovieStatus] = useState (props.status)
    const [removeBtn,setremoveBtn] = useState (props.change)
  function saveMovieInDb() {
           props.saveWatchLaterInDb(props.soon,props.title,props.image,props.quantity,props.info); 
     }
  
  function removeMovie() {
     props.removeFromWatchLater(props.id); 
  }
  
  return(
         <div className={ "cards" }  style={props.styleCard}>
            <img className="imagescar"  style={props.style}  src={props.image} />
             <div className="cardinfo" style={props.styleOfCardInfo}>
                <p className="comingsoon" style={props.styleOfSoon}>{props.soon}</p>
                <h2 className ="movietitle" style={props.styleOfTitle}>{props.title}</h2>
                <p className="movieinfosoon" style={props.styleInfo}> {props.info} </p>
                 {/* { start ? <button onClick={pressed}  style={props.buttonstyle} >{props.button}{props.press}</button> : null}            */}
                { removeBtn ? <i  onClick={removeMovie}  className={props.remove}> </i> : null} 
                 { removeBtn ?  <p>{props.quantity}</p> : <p style={{display:'none'}}>{props.quantity}</p>}
                 { addMovieStatus ? <i onClick={saveMovieInDb}  className={props.icon}></i> : null}   
             </div>
            </div> 
    );
}
export default Card;
