import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedBackContext';

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
       <FeedbackProvider>
       <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/'element={
                        <>
                        <FeedbackForm handleAdd={addfeedback}/>
                        <FeedbackStats feedback={feedback} />
                        {/* passing the data as feedback to the list */}
                        <FeedbackList 
                        feedback={feedback}
                        handleDelete={deleteFeedback}/>
                        </>
                    }
                    ></Route>
                <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App;