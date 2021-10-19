import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



const ServiceDetail = () => {
    let {serviceId} = useParams();
    
    const [serviceDetail,setServiceDetail]=useState([])
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res=>res.json())
        .then(data=>console.log(data.service));
    },[]);
    // useEffect(()=>{
    //     const foundService=serviceDetail.find( service=>service.id===serviceId )
    // },[serviceDetail,serviceId]);
   
    return (
        <div>
            <h1>Servics:{serviceId}</h1>
            
           
            
        </div>
    );
};

export default ServiceDetail;