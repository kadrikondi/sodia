// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCalendarAlt, faUsers, faTv, faClock, faCommentDots, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import './Dummydata';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faAddressBook} className="sidebar-icon" />
        <a href= "..">Friends List</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon" />
        <a href='..'>Friends</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faCalendarAlt} className="sidebar-icon" />
        <a href='..'>Events</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
        <a href='..'>Groups</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faTv} className="sidebar-icon" />
        <a href='..'>Watch</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faClock} className="sidebar-icon" />
        <a href='..'>Memories</a>
      </div>
      <div className="sidebar-section">
        <FontAwesomeIcon icon={faCommentDots} className="sidebar-icon" />
        <a href='..'>What's on your mind</a>
      </div>
    </div>
  );
};

export default Sidebar;
