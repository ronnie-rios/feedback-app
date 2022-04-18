import React from 'react'
import { useContext } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedBackContext';

function FeedbackItem ({ item }) {
  //gets the delete function from the provider feedbackcontext
  const {deleteFeedback} = useContext(FeedbackContext)
  //passing item from the list component, it's already destructured
  //setting it to item.rating and .text, thus having it display
    return (
    <Card >
        <div className='num-display'>{item.rating}</div>
          <button 
          onClick={()=> deleteFeedback(item.id)}
          className="close">
          <FaTimes color='red'/>
          </button>
        <div className='text-display'>{item.text}</div>
     </Card>
  )
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  
}

export default FeedbackItem;