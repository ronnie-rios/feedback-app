import React from 'react'
import Card from './shared/Card';
function FeedbackItem ({ item }) {
  //passing item from the list component, it's already destructured
  //setting it to item.rating and .text, thus having it display
    return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
     </Card>
  )
}

export default FeedbackItem;