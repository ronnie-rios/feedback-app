import React from 'react'
import PropTypes from 'prop-types';
function FeedbackStats({ feedback }) {
  //calc rating avg
  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )

    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews </h4>
        <h4>Average Rating: { isNaN(average) ? 0 : average }</h4>
    </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats