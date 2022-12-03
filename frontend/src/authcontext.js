import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const AuthContext = createContext({});
export default function Context(props){

    const [userObject, setUserObject] = useState();
      useEffect(() => {
          axios.defaults.withCredentials = true
          axios.get(process.env.REACT_APP_BACKEND_URL + "/user/get").then((res) => {       
          if (res) {
              setUserObject(res.data.name);                         
            }
     
          
       })
   }, [])
    return (
        <AuthContext.Provider value={userObject}>{props.children}</AuthContext.Provider>
    )
}





















 