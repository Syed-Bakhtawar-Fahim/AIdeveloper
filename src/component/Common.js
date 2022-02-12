import React from 'react';
import './Home.css';
import web from '../Images/home2.svg'
import {Link} from 'react-router-dom'


function Common(props) {
  return (
    <React.Fragment>
      <section id='header'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 margin-set'>
                  <h1>{props.name} <strong className='brand-name'>AI Developer</strong></h1>
                  <h2 className='my-3'>We are the team of talented AI developer making AI Chatbot and also working on Machine Learning</h2>
                  <div className='mt-3'>
                    <Link to={props.visit} className='own-btn-get-started'>{props.btnName}</Link>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={props.imgsrc} className='img-fluid animated' alt='home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Common;