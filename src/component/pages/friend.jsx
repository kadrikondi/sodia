// src/components/Friend.js
import React from 'react';
import './friend.css';

const Friend = ({ friend }) => {
  return (
    <div className="friend">
      <img src={friend.avatar} alt={friend.name} className="friend-avatar" />
      <div>
        <h4>{friend.name}</h4>
        <p>{friend.status}</p>
      </div>
    </div>
  );
};

export default Friend;
