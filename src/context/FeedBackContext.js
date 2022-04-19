import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true)
    const [feedback, setFeedback] = useState([ ])
    //edit state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        //run on page load fetch from api
        fetchFeedback()
        //blank arr = runs 1 
    }, [])

    //fetching feedback from db.json
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:4000/feedback?_sort=id&_order=desc")

        const data = await response.json();
        setFeedback(data)
        setLoading(false)

    }
    //delete feedback filter by id and remove from arr using filter
    const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete')) {
        setFeedback(feedback.filter((item) => item.id !== id))
     }
    }

    //addfeedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //adding to our state of objects; should be added to our ui
        setFeedback([newFeedback, ...feedback])
    }

    //updates the item and spreads it on the arr of feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? 
        {...item, ...updItem} : item
        ))
    }

    //set item to be updated 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider
        value={{
          feedback,
          feedbackEdit,
          isLoading,
          //abv is state, below is functions
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback,
        }}>
        { children }
        </FeedbackContext.Provider>
};

export default FeedbackContext;