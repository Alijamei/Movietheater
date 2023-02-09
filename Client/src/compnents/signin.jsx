import {React,useState,useContext} from "react";
import {
  useHistory, 
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { AuthContext } from "../authcontext";
import { schema } from "../valdition";
import axios from "axios";

function Signin(){
 
     const userObject = useContext(AuthContext);
    
     let history = useHistory();
     const [state, handlechange] = useState({
         name:'',
         password:''
     })
       function  handleit( event) {
        event.preventDefault();
        const signin = {
            name:event.target.name.value ,
            password:event.target.password.value,
            };     
            console.log(event.target.password.value)
            axios
             .post(
                process.env.REACT_APP_BACKEND_URL + "/user/login" ,signin)
               .then(res => {           
                        window.location.href = "/"
                        console.log(res);  
              })
               .catch((err) => {
                    console.log(err)
                    console.log('error here')                  
              });
                 
          }
          

    async function handlechangee(event){
          const{value,name} = event.target
          handlechange(valuee => {
            return{
                 ...valuee,
                [name]:value
            } 
        });
  
       const valid = await schema.isValid(state);
       console.log(valid)
          
  }         
        
  
    return (
          
     <div className='all'> 
         <img className="imggg" src="/images/logo.png" />

         <div className='containerr  signincontainer' >
              
             
                        <div class="form-container sign-in-container">
                            <form className="form" onSubmit={handleit}>
                                <h1>Sign In</h1>
                                <div class="social-container">
                                    <a  className="social"><i className='fa fa-facebook-square'></i></a>
                                    <a  className="social"><i className="fa fa-google"></i></a>
                                 
                                </div>
                                <span>or</span>
                                <label className="email label label" >  Username </label>
                                <input className='input '  name="name" onChange={handlechangee}   placeholder="name ..." value={state.name}/>
                                <label className="passlabel label" >  password  </label>
                                <input className='input' name="password"  onChange={handlechangee}  placeholder="Password..."  value={state.password} />
                                <a > Forget Password?</a>
                                <button className="btn-login"  type='submit'>Lets' Go</button>
                                <h3 className="or"> or signup</h3>
                                <Link to="/signup"><button className="snns">Sign Up</button></Link>
                            </form>
                            
                        </div>
                        
                    </div>
             </div>         

    )

}
export default Signin;
