import React, { useState,useEffect } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
   useEffect(()=>{
        fetch('./fakedt.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return (
        <div>
           <div className="services mx-3">
           <h2 className="text-center mt-5 title">Our Doctors</h2>
           <br />
           <br />
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {doctors.map(doctor=><Doctor key={doctor.id} doctor={doctor}></Doctor>)}
            </div>
            <hr />
            
        </div> 
            
        </div>
        
    );
};

export default Doctors;