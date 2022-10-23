import React from 'react';
import PropTypes from 'prop-types';
import s from './notifications.module.css';

 function Notifications ({message}) {
     return (
         <p className={s.notice}>{message}</p>
  );
}

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notifications
