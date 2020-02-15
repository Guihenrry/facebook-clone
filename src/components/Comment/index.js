import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar'
import './styles.css';


function Comment({ data }) {
  return (
    <div className="comment">
      <Avatar user={data.author} />
      <p className="comment-content"> 
        <strong className="comment-author">{data.author.name} </strong>
        {data.content}
      </p>
    </div>
  )
}

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    content: PropTypes.string
  }).isRequired
}

export default Comment;