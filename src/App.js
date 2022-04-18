import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedBackContext';

function App() {
    
 
    return (
       <FeedbackProvider>
       <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/'element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        {/* passing the data as feedback to the list, now
                        the state is getting access from the feedback provider */}
                        <FeedbackList />
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