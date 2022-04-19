import { createContext, useState, useEffect } from "react";

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
        const response = await fetch("/feedback?_sort=id&_order=desc")

        const data = await response.json();
        setFeedback(data)
        setLoading(false)

    }
    //delete feedback filter by id and remove from arr using filter
    const deleteFeedback = async (id) => {
    if (window.confirm('are you sure you want to delete')) {
        await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })
        
        setFeedback(feedback.filter((item) => item.id !== id))
     }
    }

    //addfeedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
    const data = await response.json()
    //adding to our state of objects; should be added to our ui
    setFeedback([data, ...feedback])
    }

    //updates the item and spreads it on the arr of feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updItem),
        })
    
        const data = await response.json()
    
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    
        setFeedbackEdit({
          item: {},
          edit: false,
        })
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