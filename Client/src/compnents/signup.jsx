import {React,useState,useContext} from "react";
import {
  useHistory, 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { userschema } from "../signupvalidate";
import {Formik, Form, Field, ErrorMessage } from "formik";
import { AuthContext } from "../authcontext";
const axios = require('axios');

function Signup(){
    const auth = useContext(AuthContext);
    
              
    return (
          
      <div className='all'> 
          <img className="imggg" src="/images/logo.png" alt=""/> 
             <div className='containerr signupcontainer' >
            
                    
                 <div class="form-container sign-in-container">

                     <Formik
                          initialValues={{ name: "", password: "" ,confirmpassword:''}}
                          validationSchema={userschema}
                          onSubmit=  {(valuu => {
                            const { confirmpassword, ...data } = valuu;
                            
                              axios
                                .post(process.env.REACT_APP_BACKEND_URL + "/user/signup", data)
                                    .then(res => {           
                                         window.location.href = "/"
                                         console.log(res);  
                                })
                                     .catch((err) => {
                                        console.log(err)
                                        console.log('Error here')                  
                                });                  
                          })}
                        >
                         {({ handleChange,values,handleSubmit,errors,touched,isValid }) => ( 
                                
                        <form className="form"  onSubmit={handleSubmit} >
                            <h1 className="signup"> Sign up </h1>
                                <div class="social-container">
                                    <a  className="social"><i className='fa fa-facebook-square'></i></a>
                                    <a  className="social"><i className="fa fa-google"></i></a>
                                 
                                </div>
                                <span>Or</span> 
                            <label className="emaillabel label" >  Username  </label>
                            <Field  className='input' name='email' value={values.name} onChange={handleChange} type="name"    placeholder="name ..." name='name'/>
                            {errors.name && touched.name ? (
                             <div>{errors.name}</div>
                             ) : null}
                             <label className="passlabel label" >  password  </label>
                            <Field className='input' name='password' value={values.password} onChange={handleChange} type="password" placeholder="Password..." name='password' />
                            {errors.password && touched.password ? (
                             <div>{errors.password}</div>
                             ) : null}
                            
                         

                               

                                <a > Forget Password?</a>
                                <button className="btn-login" type="submit" >  Lets' Go </button>

                                  <p className="or p"> or Signin</p>
                                 <Link to="/signin"><button className="snns" >Sign in</button></Link> 
         
                            </form>
                           
                         )}
                            </Formik>
                        
                        </div>
                        
                    </div>
           </div>

              
         

    )


}
export default Signup;

