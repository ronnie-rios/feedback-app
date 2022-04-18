import React from 'react'
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

function AboutLink() {
  return (
    <div className='about-link'>
        <Link to ='/about'>
            <FaQuestion size={25} />
        </Link>
    </div>

  )
}
export default AboutLink