// src/components/Story.js
import React from 'react';

const Story = ({ story }) => {
  return (
    <div className="story">
      <img src={story.userAvatar} alt="user avatar" className="avatar" />
      <p>{story.username}</p>
    </div>
  );
};

export default Story;

