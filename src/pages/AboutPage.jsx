import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return <Card>
      <div className='about'>
          <h1>About</h1>
          <p>React app to leave feedback and rating on a service</p>
          <Link to='/'>
            <p>Back to home page</p>
          </Link>
      </div>
  </Card>
}

export default AboutPage