import React from 'react';
import PropTypes from 'prop-types';
import s from './sections.module.css';


 function Sections({title, children}) {
  return (
    <section className={s.container}>
          <h1>{title}</h1>
          {children}
    </section>
  );
}

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Sections