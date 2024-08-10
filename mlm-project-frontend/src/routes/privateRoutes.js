import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';

 const PrivateRoute = () => {
 const navigate=useNavigate()
   const [ok, setOk] = useState(false);
   const {auth, setAuth} = useAuth();

   useEffect(() => {
    const authCheck = async() => {
        console.log("response");
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
        
        if(res.data.ok){
            setOk(true);
            console.log('helo');
            
        }else{
            navigate('/login');
            setOk(false)
            console.log('hwlo');
            
        }
    }
    if(auth?.token) console.log(auth?.token);
   },[auth?.token])

  return ok ? <Outlet/> : <Spinner/>
}

export default PrivateRoute