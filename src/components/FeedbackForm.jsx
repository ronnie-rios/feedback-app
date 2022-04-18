import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedBackContext';

function FeedbackForm() {
    //state handlers for our data
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    //getting the addfeedback func from the feedback context 
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    //useeffect
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setbtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    //standard functions to handle text and submit
    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length < 10) {
            setMessage('Text must be 10 characters')
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            
            
            setText('')
        }
    }

    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Rate your experience</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input 
                onChange={handleTextChange}
                type="text" 
                placeholder='Write a review'
                value={text}
                />
            <Button type="submit" isDisabled={btnDisabled}>
                send
            </Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </ Card>
  )
}

export default FeedbackForm