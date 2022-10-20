import React from 'react';
import s from './notifications.module.css';

 function Notifications ({message}) {
     return (
         <p className={s.notice}>{message}</p>
  );
}


export default Notifications
