import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Signin from '../pages/Signin';

const ProtectedRoutes = () => {

    const token = localStorage.getItem('token');

  return (
    token ? <Outlet /> : <Navigate to='/signin' replace />
  )
}

export default ProtectedRoutes