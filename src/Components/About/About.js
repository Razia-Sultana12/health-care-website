import React from 'react';
import image from '../../images/smartworks-coworking-E7Tzh2TTS6c-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
  const medical = <FontAwesomeIcon icon={faClinicMedical} />


    return (
        <div className="m-5 ">
            <h1 className="text-center p-3 text-success">{medical} Our Hospital At A Glance</h1>
            <p className="py-3">At Heal n Cure, our goal is to partner with you on your path to optimal health, wellness, and vitality. Through our functional medicine approach, we identify the root cause of disease and treat the underlying imbalance rather than the symptoms. Our “test, don’t guess” policy will look at the unique biochemical makeup of each individual to assess their health with patient-centered medicine. Heal n Cure always utilizes cutting edge diagnostic tools to achieve clarity on underlying disease process. With a clear blue print of your health in hand, our providers mentor you through your wellness journey to reclaim your health.</p>
            <br />
            <h3>Freaquently Asked Questions</h3>
            <br />
            <div className="d-flex justify-content-between">
              <div>
            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"><h5>What procedures will I have in the Emergency Department?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <h5>How is the Emergency Department staffed?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      The department is staffed with emergency medicine physicians and nurses, physician assistants, technicians, HAC and unit coordinators along with specialists from the laboratory, cardiology, respiratory and radiology departments.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       <h5>What happens if I am admitted?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      Upon admission to the hospital, you will remain in the Emergency Department until your inpatient room is ready. Your admitting physician will visit you during their designated "patient rounds."
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       <h5>What happens if I miss my time slot?</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      If you arrive at the emergency department after your requested time slot, you will be registered, triaged and treated the same as any patient who walks through our doors.
      </div>
      </div>
    </div>
  </div>
</div>
<img className="ms-3" src={image} alt="" srcset="" />
</div>
<br />
    <div className="row text-start">
    <div className="col-6 col-md-4">
    <h5>Who We Are?</h5>
    <p className="">Francis S. Collins, M.D., Ph.D., was officially sworn in on August 17, 2009, as the 16th director of the H&C.Dr. Collins is a physician-geneticist noted for his landmark discoveries of disease genes and his leadership of the international Human Genome Project, He served as director of the National Human Genome Research Institute at NIH from 1993-2008.</p>
  </div>
  <div className="col-6 col-md-4">
    <h5>What We Do?</h5>
   <p className="">How H&C works to prevent disease and improve health.Our team members spend the extra time to truly listen to each patient and to customize a care plan to meet the individual needs. Rather than treat symptoms, or address one problem at a time, we work with the individual to help them reach their ultimate vitality and health goals through a caring integrative Functional Medicine approach.</p>
   </div>
    <div className="col-6 col-md-4">
        <h5>Jobs At H&C</h5><p>Search for jobs, including scientific, administrative, executive careers.You do not need knowledge and/or experience in the medical or science health fields to work at H&C! An administrative career can include:

supporting facilities and maintenance
managing contracts and acquisition services
administrating federal scientific grants
developing websites
implementing cyber security systems
ensuring campus and staff are safe</p>
    </div>
    </div>
    <div className="row">
    <div className="col-6 col-md-4"><h5>Visitor Information</h5>
    <p>The H&C headquarters, known as the “NIH campus” to the local community, are located in Bethesda, Maryland. Administrative and program operations facilities are also located in off-campus buildings in the surrounding area. H&C scientists conduct their research in laboratories located on the main campus, and in several field units across the country and abroad.</p></div>
    <div className="col-6 col-md-4"><h5>Success Stories</h5><p>At Heal n Cure, we have helped thousands of practice members to reach their wellness goals and to truly address root causes of symptoms through Integrative care. Hearing the positive and life changing success stories of our patients brings us the greatest joy as we know we have assisted them in a life changing way that will help them for many years to come. Listen to some of our practice member stories:<a href="#">visit here</a></p></div>
    <div className="col-6 col-md-4"><h5>Contact Us</h5>
    <p><h6>Head Office:</h6>
               <p>{location} Momtaz Plaza (4th Floor) House#7, Road#4, Dhanmondi, Dhaka-1205</p>
               <p>{phone} +880 1624666000,+880 1624888444,+880 1966177177</p></p></div>
  </div>
  </div>
        
    );
};

export default About;