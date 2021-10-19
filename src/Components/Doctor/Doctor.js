import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Doctor = props => {
    const {name,qualification,specialist,rating,image}=props.doctor;
    const callIcon = <FontAwesomeIcon icon={faPhoneSquareAlt}/>
    const appIcon = <FontAwesomeIcon icon={faCalendarCheck}/>
    return (
        <div>
            <div className="col">
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top h-75 w-75 img-thumbnail rounded mx-auto " alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><small>Qualification:</small>{qualification}</p>
        <p className="card-text"><h6>Specialist:</h6>{specialist}</p>
        <p className="text-warning">
        <Rating
        initialRating={rating}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        readonly></Rating></p>
        <button className="me-3 rounded-pill">{appIcon} Appointment</button>
        <button className="rounded-pill">{callIcon} 0099887133</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Doctor;