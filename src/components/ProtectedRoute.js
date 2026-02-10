import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => { 
    // Bad way of checking isAuthenticated true/false using variable
    const isAuthenticated = true
   
    // Auth API calling logic
    // Checking the user is authenticated or not based on that rendering routes

  return  isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
  
}

export default ProtectedRoute