import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'item from context 1',
            rating: 9,
        },
        {
            id: 2,
            text: 'item from context 2',
            rating: 8,
        },
        {
            id: 3,
            text: 'item from context 3',
            rating: 7,
        },
    ])

    //filter by id and remove from arr using filter
    const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete')) {
        setFeedback(feedback.filter((item) => item.id !== id))
     }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //adding to our state of objects; should be added to our ui
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider
        value={{
          feedback,
          deleteFeedback,
          addFeedback
        }}>
        { children }
        </FeedbackContext.Provider>
};

export default FeedbackContext;