import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    const [serviceDetail,setServiceDetail]=useState([]);

    useEffect(()=>{
        fetch('/fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setServiceDetail(data));
        
    },[])
    
    if(!serviceDetail){
        <div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    }
    console.log(serviceDetail);
    const foundService=serviceDetail.find(data=>data.id==serviceId);
    console.log(foundService);
    let title,description,image;
    if(foundService){
        ({title,description,image}=foundService);
        console.log(foundService);
    }
        return (
        <div>
        <div class="card mb-3">
  <img src={image} class="card-img-top w-50  h-50 mx-auto" alt="..."/>
  <div class="card-body text-center">
    <h2 class="card-title text-success">{title}</h2>
    <p class="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
        
        </div>
    );
};

export default ServiceDetail;