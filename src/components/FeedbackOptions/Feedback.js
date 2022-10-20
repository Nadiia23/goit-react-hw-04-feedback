import React from 'react';
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

export default Feedback


