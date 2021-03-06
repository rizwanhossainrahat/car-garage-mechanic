import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://fierce-shelf-86694.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete=id=>{
        const url=`https://fierce-shelf-86694.herokuapp.com/services/${id}`;
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert('are you want to delete?')
                const remaining=services.filter(service=>service._id!==id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <h2>this is manage services</h2>
            {
                services.map(service=><div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;