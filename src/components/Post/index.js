import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

import Avatar from '../Avatar'
import Comment from '../Comment'

function Post({ data }) {
  return (
    <article className="post">
      <div className="post-info">
        <Avatar user={data.author} />
        <div> 
          <p className="posts-author">{data.author.name}</p>
          <p className="post-date">{data.date}</p>
        </div>
      </div>
      <p className="post-content">{data.content}</p>

      {data.comments && (
        <div className="posts-comments">
          { data.comments.map(comment => (
            <Comment key={comment.id} data={comment}/>
          ))}
        </div>
      )}
    </article>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.array
  })
}

export default Post;