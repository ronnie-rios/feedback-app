import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
    //state handlers for our data

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    
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
            handleAdd(newFeedback);

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