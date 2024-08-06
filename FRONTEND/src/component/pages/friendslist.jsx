// src/components/FriendsList.js
import React from 'react';
import Friend from './friend.jsx';
import './friendslist.css';

const FriendsList = ({ friends }) => {
  return (
    <div className="friends-list">
      <h2>Friends List</h2>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
