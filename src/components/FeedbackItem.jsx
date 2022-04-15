import React from 'react'

function FeedbackItem ({ item }) {
  //passing item from the list component, it's already destructured
  //setting it to item.rating and .text, thus having it display
    return (
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
     </div>
  )
}

export default FeedbackItem;