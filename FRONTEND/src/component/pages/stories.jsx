// src/components/Stories.js
import React from 'react';
import Story from './story.jsx';
import './stories.css'; // Add styles for stories

const Stories = ({ stories }) => {
  return (
    <div className="stories">
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
};

export default Stories;
