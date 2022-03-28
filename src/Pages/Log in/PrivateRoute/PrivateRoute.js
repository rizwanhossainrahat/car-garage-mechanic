import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const location=useLocation()
    const {user,isLoading}=useAuth()
    if(isLoading){
        return <Spinner animation="border" variant="success" />;
    }

    return (
        <div>
            {user.email?
            children:
            <Navigate {...rest} to='/login' state={{ from: location }}  replace ></Navigate>

            }
        </div>
    );
};

export default PrivateRoute;