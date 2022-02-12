import React, { useEffect, useState } from 'react';
import './Contact.css'
import { Form} from 'react-bootstrap'
import web from '../Images/contact.svg'
import axios from 'axios'
import Alert from './Alert';
import './Alert.css'


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const URL = "https://crudoperationnodejsmongodb.herokuapp.com"
  // useEffect(() => {
  //   axios.post(`https://crudoperationnodejsmongodb.herokuapp.com/users`, { name, email, phone })
  //   console.log(name, email, phone)

  // }, [])

  function submitForm(e) {
    console.log(name, email, address);
    axios.post(`${URL}/user`, { name, email, address })
      .then((response) => {
        // console.log(response.data)
        alert(`Your form has been submitted. We'll get in touch with you in few hours. Thankyou`)
       
      })
      .catch(e => {
        console.log('Error due to ' + e)
      })
    e.preventDefault()
    

  }



  return (

    <React.Fragment>
     {/* <Alert /> */}
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx auto'>
            <div className='my-5'>
              <h1>Our Contact</h1>
            </div>
            <Form onSubmit={submitForm} className='contact-form'>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={(e) => { setName(e.target.value) }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" value={address} onChange={(e) =>
                  setAddress(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <button className='btn btn-outline-secondary' type='submit' >Submit Form</button>
            </Form>
          </div>

        </div>
      </div>
      
    </React.Fragment>
  );
}

export default Contact;
