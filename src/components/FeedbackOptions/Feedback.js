import React from 'react';
import PropTypes from 'prop-types';
import s from './feedback.module.css'

const Feedback = ({ items, handleUpdate }) => {
    return (
         <div>
             {items.map(item => (
                 <button
                     key={item}
                     name={item}
                     className={s.btn}
                     type="button"
                     onClick={handleUpdate}
                 > {item.toUpperCase()}    
                 </button>
             ))}
             
        </div>)
}


Feedback.propTypes = {
    items: PropTypes.array.isRequired,
  handleUpdate: PropTypes.func.isRequired,
}

export default Feedback


