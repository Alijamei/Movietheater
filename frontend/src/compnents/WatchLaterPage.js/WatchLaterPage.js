import axios from "axios";
import {React,useContext} from "react";
import { WatchLaterContext } from '../../context/watchLaterContext'
import WatchLater  from "../cart";
import Card from '../card';
import useSaveMovieInWatchLaterDB from '../../api/useSaveMovie';

export default function WatchLaterPage(){
    const {WatchLaterList,setWatchLaterList} = useContext(WatchLaterContext);


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
                   checkIfListIsEmpty = {WatchLaterList}                     
                    viewAllWatchLaterList= {WatchLaterList.map((item) => (                                             
                              <div className="right">
                                  <Card
                                    styleCard={{float:'left',width:'21%'}}
                                    key={item._id}
                                    id={item._id}
                                    image={item.array.image}
                                    soon={item.array.soon}
                                    title={item.array.title}
                                    info={item.array.info}             
                                    saveWatchLaterInDb={useSaveMovieInWatchLaterDB}          
                                    remove={'icon fa fa-trash'}
                                    removeFromWatchLater={removeFromWatchLaterList}
                                    status={false}
                                    change={true}

                            />
                               </div>
                            ))} 

                   />

        </>
    )
}
