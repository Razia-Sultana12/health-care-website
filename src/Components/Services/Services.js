import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
           <div className="services mx-3">
           <h2 className="text-center mt-5 title">Our Services</h2>
           <br />
           <br />
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {services.map(service=> <Service key={service.id}
            service={service}></Service>)}
            </div>
            <hr />
            
        </div> 
            
        </div>
    );
};

export default Services;