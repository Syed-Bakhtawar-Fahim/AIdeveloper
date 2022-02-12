import React from 'react';
import './Home.css';
import web from '../Images/home2.svg'
import { Link } from 'react-router-dom'
import Common from './Common';

function About() {
  return (
    <React.Fragment>
      <Common
        name='Welcome To About Page'
        imgsrc={web}
        visit='/contact'
        btnName='Contact Now'

      />
    </React.Fragment>
  )
}

export default About;