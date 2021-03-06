import React from 'react';
import { useContext } from 'react';
import FeedBackitem from './FeedbackItem';
import Spinner from './shared/Spinner';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedBackContext';

function FeedbackList() {
   //extracting from feedback context
   const { feedback, isLoading } = useContext(FeedbackContext);

    //if not loading and if no feedback display this p tag
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>no feedback yet</p>
    }

    return isLoading ? ( <Spinner /> ) : (
        <div className='feedback-list'>
        <AnimatePresence>
        {/*mapping through feedback destructured property, set item as own component
        and setting the key to the feedback.item.id and item to feedback.item*/}
        {feedback.map((item)=> (
            <motion.div 
            key={item.id}
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }>
            <FeedBackitem 
                key={item.id}
                item={item}
            />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
    )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }
export default FeedbackList