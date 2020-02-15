import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import profile from '../../assets/profile.jpg';

function Avatar({ user }){
  return (
    <img 
      className="avatar"
      src={user.avatar ? user.avatar : profile}
      alt={user.name}
    />
  )
}

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired
}

export default Avatar;