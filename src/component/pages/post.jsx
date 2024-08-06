import React from 'react';
const Post = ({ post }) => {
    console.log('Post component received:', post); // Debugging log
  
    // Check if the post object is defined
    if (!post) {
      return <div>Post information is not available.</div>;
    }
  
    return (
      <div className="post">
        <div className="post-header">
          <img src={post.userAvatar || '/default-avatar.png'} alt="user avatar" className="avatar" />
          <div>
            <h3>{post.username || 'Anonymous'}</h3>
            <p>{post.timestamp || 'Timestamp not available'}</p>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content || 'No content available'}</p>
          {post.image && <img src={post.image} alt="post" />}
        </div>
      </div>
    );
  };
  
  export default Post;
  
