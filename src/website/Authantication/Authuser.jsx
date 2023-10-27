import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Authuser = () => {
  
  const gettokan =()=>{
   const tokenString=sessionStorage.getItem("token");
   const usertoken=JSON.parse(tokenString);
   return usertoken;
  }
  const getuser =()=>
  {
    const userString=JSON.parse(sessionStorage.getItem("user"));
    return userString;

  };
 
  const saveToken=(user,token)=>{
    sessionStorage.setItem("token",JSON.stringify(token));
    sessionStorage.setItem("user",JSON.stringify(user));
  }

  const [token,settoken]=useState(gettokan());
  const [user,setuser]=useState(getuser());

  const http = axios.create({
    baseURL: "https://vsmart.ajspire.com/api",
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
    },
});

   const logout=()=>
   {
    sessionStorage.clear();
    settoken(null);
    setuser(null);
    Navigate('/')
   }

    return {
      http,
      settoken:saveToken,
      token,
      user,
      logout
    };
}

export default Authuser;



