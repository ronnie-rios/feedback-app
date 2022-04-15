import React from 'react';
import FeedBackitem from './FeedbackItem';

function FeedbackList({ feedback }) {
    //if no feedback display this p tag
    if (!feedback || feedback.length === 0) {
        return <p>no feedback yet</p>
    }

    return (
    <div className='feedback-list'>
        {/*mapping through feedback destructured property, set item as own component
        and setting the key to the feedback.item.id and item to feedback.item*/}
        {feedback.map((item)=> (
            <FeedBackitem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList