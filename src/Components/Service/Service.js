import React from 'react';
import { Link } from 'react-router-dom';


const Service = props => {
    const {id,title,description,image}=props.service;
    return (
<div>
<div className="col">
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top" height="250" width="250" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-center">{description.slice(0,200)}</p>
      <Link to={`/serviceDetail/${id}`}>
          <button className="btn btn-secondary">See more</button>
      </Link>
      </div>
    </div>
</div>
</div>)}

export default Service;