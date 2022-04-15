import React from 'react';
import FeedBackitem from './FeedbackItem';
import PropTypes from 'prop-types';

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

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList