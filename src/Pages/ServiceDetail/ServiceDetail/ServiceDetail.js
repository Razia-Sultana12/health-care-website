import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';




const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [services,setService]=useState({});
    useEffect(()=>{
        fetch("/fakedata.JSON")
        .then((res)=>res.json())
        .then((data)=>setService(data));
    },[]);
    // let service;
    // if(services.length){
    //     service=services?.find(service=service.id===serviceId)
    // }
    // const history=useHistory();
    // const onHandleBack=()=>{
    //     history.push('/Home');
    // };
   
    return (
        <div>
            
            <h1>{serviceId}</h1>
        { 
            // <div className="card h-100 text-center">
            // <img src={image} className="card-img-top" height="250" width="250" alt="..."/>
            // <div className="card-body">
            //   <h2 className="card-title">{title}</h2>
            //   <p className="text-center">{description}</p>
            //   </div>
            //   </div>
        
            }
      
        </div>
    );
};

export default ServiceDetail;