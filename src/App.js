import React from 'react';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

function App() {
    //setting the global app state with the data arr from feedbackdata
    const [feedback, setFeedback] = useState(FeedbackData)
    //filter by id and remove from arr using filter
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure you rant to delete')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }
    return (
       <>
       <Header />
        <div className='container'>
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