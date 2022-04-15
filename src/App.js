import React from 'react';
import Feedback from './components/Feedback';
import Header from './components/Header';

function App() {
    return (
       <>
       <Header />
        <div className='container'>
            <Feedback />
        </div>
        </> 
    )
}

export default App;