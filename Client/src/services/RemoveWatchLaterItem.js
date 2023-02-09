import axios from 'axios';

export default function removeFromWatchLaterList(id,setWatchLaterList){ 
               
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
