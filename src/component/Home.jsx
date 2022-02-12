import React from 'react';
import './Home.css';
import web from '../Images/about.svg'
import {Link} from 'react-router-dom'
import Common from './Common';

function About()
{
  return(
    <React.Fragment>
      <Common
        name='Grow your business with'
        imgsrc={web}
        visit='/services'
        btnName='Get Started'
      />
    </React.Fragment>
  )
}

export default About;