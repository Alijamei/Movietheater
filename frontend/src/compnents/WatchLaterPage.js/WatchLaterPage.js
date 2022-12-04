import axios from "axios";
import {React,useState,useEffect,useContext} from "react";
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
                                        herecallit={useSaveMovieInWatchLaterDB}          
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