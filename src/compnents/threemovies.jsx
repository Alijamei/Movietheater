import React, {useContext, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import "./threemovies.css";
import { AuthContext } from "../authcontext";

function Movies(){
   // const userObject = useContext(AuthContext);
   //  console.log(userObject)
   const[intial,set] = useState(false)

   
   function setit(){

          set(true);
         
   }
   function down(){
          set(false)
   }
 
   function getti() {
      if (intial === true) {
            
          return(
                <div className="slatt">
                   <i onClick = {down} className="fas fa-window-close"></i>

                   {/* <video className="z" src={"/images/fellasvideo.mp4"} width="100%" height="100%" controls>
            
                  </video> */}
               </div>
                  )
      }
      else  {
            return '';
      
 }
}
 return( 
    <div className="movies">
          <div className="fellas">
                    {getti()}
            </div>  
                  
        <div className="firstmovie">
               <img  className="imag felle"  src="/images/goodfelles.jpg"  />
            <div className="textcontaner">
               <h1 className="fella" onMouseOver={setit} > Goodfelles </h1>
               <p className="moviep">The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.</p>
               <Link to="/goodfellas" className="findoutmore"> More info </Link>
                    
                  {/* {intial  ?  
                          <img    src="/images/goodfelles.jpg"  />
                      
                   :  ''}*/}
            </div>
          </div>
          <div className="secondmovie">
               <img className="imag imgtwo" src="/images/out.jpg" />
             <div className="textcontaner">
               <h1 className="otwh1"> once upon time in hollowyood </h1>
               <p className="moviep otw">A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.</p>
               <Link to="/onceupontime" className="findoutmore fintwo"> More info </Link>
             
            </div> 
          </div>
          <div className="thirdmovie">
              <img className="imag" src="/images/thesopranos.jpg" />
            <div className="textcontaner">
              <h1> the Sopranos </h1>
               <p className="moviep sopranosparagraph">New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.</p>
               <Link to="/soprano" className="findoutmore findsopr"> More info </Link>
             
              </div>
               
           </div>
        </div>


    )

}
export default Movies;


 
