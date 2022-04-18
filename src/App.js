import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';


function App() {
    //setting the global app state with the data arr from feedbackdata
    const [feedback, setFeedback] = useState(FeedbackData)
    //filter by id and remove from arr using filter
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    const addfeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //adding to our state of objects; should be added to our ui
        setFeedback([newFeedback, ...feedback])
    }

    return (
       <>
       <Header />
        <div className='container'>
            <FeedbackForm handleAdd={addfeedback}/>
            <FeedbackStats feedback={feedback} />
            {/* passing the data as feedback to the list */}
            <FeedbackList 
                feedback={feedback}
                handleDelete={deleteFeedback}
            />
        </div>
        </> 
    )
}

export default App;