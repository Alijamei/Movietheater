import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const WatchLaterContext = createContext({});
export default function WatchLater(props){
    const [WatchLaterList, setWatchLaterList] = useState([]);

      useEffect(() => {
        axios.defaults.withCredentials = true
        axios.get(process.env.REACT_APP_BACKEND_URL +"/cart").then((res) => {       
        if (res) {
            setWatchLaterList(res.data);                
            }                   
    })
   }, [])
    return (
        <WatchLaterContext.Provider value={{WatchLaterList,setWatchLaterList}}>{props.children}</WatchLaterContext.Provider>
    )
}


