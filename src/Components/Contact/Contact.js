import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <div>
           <div className="bg-grey extra">
    <div className="container">
        <div className="row justify justify-content-center">
        <div className="col-12 col-lg-9 col-xl-8">
        <form className="">
        <div className="card newsletter p-5">
        <div className="row justify-content-center">
        <div className="col-md-9 col-11">
        <div className="row mt-0">
        <div className="col-md-12 ">
            <h4 className="text-center heading fs-1">GET 10% OFF</h4>
            <hr />
            <p className="text-center sub-heading">SUBSCRIBE TO OUR NEWSLETTER & RECEIVE A COUPON</p>
            <hr />
        </div>
        </div>
        <div className="form-group row">
        <div className="col-md-12"> <input id="e-mail" type="text" placeholder="ENTER YOUR EMAIL" name="email" className="form-control input-box rm-border text-center"/> </div>
        </div>
         <div className="form-group row justify-content-center">
        <div className="col-md-12 px-3 newButton d-grid col-2 mx-auto"> <input type="submit" value="" className="btn btn-block btn-black rm-border text-light"/><button className="py-2 nBtn">GET IT NOW</button></div>
         </div>
       <div className="form-group row justify-content-center mb-0">
        <div className="col-md-12 px-3 mt-4 newButton text-center"> <a href="#">
        <p>NO THANKS</p>
                                        </a> </div>
         </div>
        <div className="form-group row justify-content-center mb-0">
        <div className="col-md-12 px-3 text-secondary text-center">
        <small >* $50 minimum purchase</small>
        </div>
         </div>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
    </div>
</div> 
        </div>
    );
};

export default Contact;