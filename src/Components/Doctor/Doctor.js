import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Doctor.css'

const Doctor = props => {
    const {name,qualification,specialist,rating,image,time}=props.doctor;
    const callIcon = <FontAwesomeIcon icon={faPhoneSquareAlt}/>
    const appIcon = <FontAwesomeIcon icon={faCalendarCheck}/>
    return (
        <div>
            <div className="col">
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top rounded mx-auto img-thumbnail" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><small>Qualification:</small>{qualification}</p>
        <p className="card-text"><h6>Specialist:</h6>{specialist}</p>
        <p>Time:{time}</p>
        <p className="text-warning">
        <Rating
        initialRating={rating}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        readonly></Rating></p>
        <button className="me-3 border border-success rounded-pill bg-success p-2 text-light">{appIcon}Appointment</button>
        <button className="rounded-pill p-2 bg-info border border-info text-light">{callIcon} 0099887133</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Doctor;