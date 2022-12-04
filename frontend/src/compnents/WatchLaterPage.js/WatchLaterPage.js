import axios from "axios";
import {React,useState,useEffect,useContext} from "react";
import { WatchLaterContext } from '../../context/watchLaterContext'
import WatchLater  from "../cart";
import Card from '../card';


export default function WatchLaterPage(){
    const {WatchLaterList,setWatchLaterList} = useContext(WatchLaterContext);
    console.log(WatchLaterList,'watchCONTEXT')
          
    const localUser = JSON.parse(localStorage.getItem('initial')) || []
    const [Initial, end] = useState(localUser);

    useEffect(()=>{localStorage.setItem("initial", JSON.stringify(Initial))},[{}]) 

  function saveMovieInWatchLaterDB(soon,title,images,quantity,info){ 
      
       // is there  this item in the cart which equal to title so we dont add it again in else//    
    const isMovieInWatchLaterList = Initial.find(list => list.title ===  title);

    const addMovieToWatchLaterList =  {soon:soon,title:title,image:images,quantity:quantity,info:info}
   
    axios
    .post(
     process.env.REACT_APP_BACKEND_URL +"/cart",addMovieToWatchLaterList)
    .then(res => {           
            console.log(res,'savedinDB');  
    })
    .catch((err) => {
        console.log(err)
        console.log('error here')                  
    });


     if(!(isMovieInWatchLaterList)){                   
              /* adding to the WatchLaterList */
             end(value => {                                 
                             return [
                                   ...value,
                                  {soon:soon,title:title,image:images,quantity:quantity,info:info}
                             ]
                           
                         })

                     }
                   }
    function removeFromWatchLaterList(id){ 
               
        axios
        .delete(
          process.env.REACT_APP_BACKEND_URL + `/cart/${id}`)
        .then(res => {                                         
                console.log(res,'deleteinfo');  
        })
        .catch((err) => {
            console.log(err)
            console.log('error here')                  
        });

        setWatchLaterList(value => {                                        
          return  value.filter(list => {
             return  list._id !== id;                               
      });                     
     }); 
                        
      }
    return(
        <>
               <WatchLater
                         inti =  {WatchLaterList}                     
                         mapp= {WatchLaterList.map((item) => (
                                                                
                                  <div className="right">
                                        {/* {console.log(item.info)} */}

                                      <Card
                                         stylecard={{float:'left',width:'21%'}}
                                        key={item._id}
                                        id={item._id}
                                        image={item.array.image}
                                        soon={item.array.soon}
                                        title={item.array.title}
                                        info={item.array.info}             
                                        herecallit={saveMovieInWatchLaterDB}          
                                        remove={'icon fa fa-trash'}
                                        hereremove={removeFromWatchLaterList}
                                        valueo={false}
                                        change={true}
                                  
                                />
                                </div>
                                ))} 

                       />

        </>
    )
}