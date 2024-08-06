// src/components/Feed.jsx
import React from 'react';
import Post from './Landing.jsx';

const Feed = ({ posts }) => {
  // Add a check to ensure posts is an array
  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
