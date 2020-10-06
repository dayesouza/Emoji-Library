import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({title}) => {
  return <h1 className="header">{title}</h1>
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
