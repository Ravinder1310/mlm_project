import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

 const AdminRoute = () => {

   const [ok, setOk] = useState(true);
   const {auth, setAuth} = useAuth();

   useEffect(() => {
    const authCheck = async() => {
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/admin-login`)
        if(res.data.ok){
            setOk(true)
        }else{
            setOk(false)
        }
    }
    if(auth?.token) authCheck();
   },[auth?.token])

  return ok ? <Outlet/> : <p>Loading....</p>
}

export default AdminRoute