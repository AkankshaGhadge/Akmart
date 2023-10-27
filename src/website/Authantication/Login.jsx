import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,  useNavigate } from 'react-router-dom';
import Authuser from './Authuser';
import { toast } from 'react-toastify';


const Login = () => {
    const notify =(M)=> toast.error(M);
    const{http,token,settoken}=Authuser();
    const[Disable,setDisable]=useState(0);
    const navigate = useNavigate();
    useEffect(() => {
   
         if(token !=null){
           
            navigate('/');
         }
         window.scrollTo({
            top:0,
            behavior:"smooth"
           });
        
      }, [navigate,token]);
     
    const[formData,setformData]= useState(
        {
         
           email:'',
           
           password:'',
           

        }
    );
    const onInputchange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    
        }
        const onSubmit = (e) => {e.preventDefault();
            http.post("/user/login",formData).then((responce)=>{
               console.log(responce.data)
               if(responce.data.token){
                alert('login succsessfully')
                settoken(responce.data.user_data ,responce.data.token);
                navigate ('/');
               }else{
                notify(responce.data.massage);
               }
               setDisable();
            });
           };
           

        // const onSubmit = (e) => {
        //     e.preventDefault();
        //     fetch('https://vsmart.ajspire.com/api/user/login', {
        //         method: 'POST',
        //         body: JSON.stringify(formData),  // Convert formData to JSON string
        //         headers: {
        //             'Content-Type': 'application/json',  // Specify content type as JSON
        //             // Include other headers if needed
        //         },
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             // Handle response data here
        //             console.log(data);
        //         })
        //         .catch((error) => {
        //             console.log("Error", error);
        //         });
        // };

    

    

    
    return (
        <div>
            <Link to='/login'></Link>
            
            <h4 className='text-center wel'>WELCOME TO VS MART</h4>
            <div class="col text-center">
                <img src="http://vsmart.ajspire.com/images/logo1.png" alt="Centered Image" class="img-fluid"/>
            </div>
       
            
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name='email'
                    onChange={onInputchange}
                    placeholder="Enter your email"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name='password'
                    onChange={onInputchange}
                    placeholder="Enter your password"
                />

                <button type="submit" onClick={(e) => onSubmit(e)}>Login</button>
                <h6 className='text-center '>Forgot Your Password? <Link>Reset Here</Link></h6>
            <h6 className='text-center '> Don't Have Any Account?<Link to='/ragister'>Register Here</Link></h6>

            </form>
           

            
            

        </div>
    )
}

export default Login