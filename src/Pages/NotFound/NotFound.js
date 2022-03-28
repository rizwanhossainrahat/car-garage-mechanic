import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
           <img style={{width:'100%'}} src={notfound} alt="" />
           <Link to='/home'><button style={{color:'red',borderRadius:'5px'}}>Go Back</button></Link>
        </div>
    );
};

export default NotFound;