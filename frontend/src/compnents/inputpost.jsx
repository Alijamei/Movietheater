import {React,useState,useContext,useEffect,useRef } from "react";
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../authcontext";
import axios from "axios";


function Post(props){
const auth = useContext(AuthContext);   
const [name,changed]=useState("");
const [fls,settruorfls]=useState(false);
const [deleteconfirm,setconfirm]=useState(false);
const [comment,setit]=useState(['']);
const [value, setValue] = useState(1);





  const userObject = useContext(AuthContext);
  const user=userObject != undefined;

 
 
  const [posts, setposts] = useState([]);
  
   
   
     useEffect(() => {
      axios.defaults.withCredentials = true
      axios.get(process.env.REACT_APP_BACKEND_URL +`/${props.port}`).then((res) => {       
              console.log(res.data)
              console.log(props.port)
               setposts(res.data);
              
        

      })
    }, [props.port])

   

    //{  console.log(posts,'HEREsetitpost')}
function click(){

   settruorfls(!fls)

}    



function clicked(e){
  const classNames = ['message', 'btnn','modal','options']
     if(e.target.classList.contains("boxd")){
            console.log(e.target.classList.contains("z"))
             setconfirm(true)
     }
 
     else if(!(classNames.some(className => e.target.classList.contains(className)))){
           
                     setconfirm(false)
     }
    
    
       
}

function methodName(params) {
  axios
  .delete(
    process.env.REACT_APP_BACKEND_URL +`/get/${params}`)
  .then(res => {           
          
          console.log(res,'deleteinfo');  
  })
  .catch((err) => {
      console.log(err)
      console.log('error here')                  
  });

  setposts(value => {
    return  value.filter(list => { 
        return  list._id.id !== params})
      })

}

function handlechange(event){

      changed(event.target.value)
      
     
       
    
}




function handleclick(event){
      
  
    setit(value =>[
            ...value,name
            


    ])
  
    event.preventDefault();
    changed('')
     
  
   
    
    axios
    .post(
      process.env.REACT_APP_BACKEND_URL +`/${props.port}`,{[props.postit] : name,review:value})
    .then(res => { 
    
          console.log(res)
             
          
          
    })
    .catch((err) => {
        console.log(err)
         console.log('error here')                  
    }) 
    
}



 


    return (
      <div className='all' style={props.theinputstyle} onClick={clicked}>
     
       <div className="containertofform"> 
      
           
            {user &&(
              <>
              <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue) }}/>
       
            <form>
           
            <textarea  onChange={handlechange}  class="textareae" rows="3" name="comment" value={name}  />
            <button class="btn" onClick={handleclick} type="submit">Submit</button>
          
            </form>
            </>
            )}
       
        
        </div>
        {user &&(     
          <div className="review">
                <p className="pop"> Popular Reviews </p>
                <p className='border'></p>
                <p className="pops"></p>
                
            
                {posts.map((item)=>{
                     return(   
                        <div>
                            <p className="para">review by  {item.posts[0].name[0]} <Rating name="read-only" value={item.posts[0].review} readOnly /> </p>
                           
                          
                       <div>        
                         {/* { <p> {item.posts[0].post}  {auth === item.posts[0].name[0] ? <i className='icon fa fa-ellipsis-h' onClick={click}> </i>:null} {fls && auth === item.posts[0].name[0]?<div><i className="boxd" onClick={deletee}>delete</i></div>:null}{deleteconfirm && auth === item.posts[0].name[0]?<div className="divvv"><i className="z">Delete your comment?</i><i className="z">confirm</i></div>:null}</p>} */}
                         { <p> {item.posts[0].post}  {auth === item.posts[0].name[0] ? <i className='icon fa fa-ellipsis-h' onClick={click}> </i>:null} {fls && auth === item.posts[0].name[0]?<div><i className="boxd" >delete</i></div>:null}{deleteconfirm && auth === item.posts[0].name[0]?<div className="modal"> <div className="options"> <p className="message">Delete your comment and review?</p> <button className="btnn" onClick = {() => { methodName(item._id.id);} }>delete</button> <button className="cancel">cancel</button> </div> </div>:null}</p>}
                      </div> 
          
                      </div>
                     )                 
                  })}
               
         
           
          
        
                                      
       
           
       
        
      </div>
  )}
      </div>
        )
}
export default Post; 


