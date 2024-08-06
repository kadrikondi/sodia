import React from 'react';
import { posts, friends, stories } from './Dummydata'; 
import Post from './post';
import Friend from './friend';
import Sidebar from './sidebar';
import Story from './story';
import '../../App.css';


// const Landing = () => {
//   console.log('Posts data:', posts); // Debugging log
//   console.log('Friends data:', friends); // Debugging log
//   console.log('Stories data:', stories); 

//   return (
//     <div className="landing-page">
    
//       <div className="stories-section"> 
//           {stories.map((story, index) => (
//             <Story key={index} story={story} />
//           ))}
//        </div>

//      <div className="main-content">
//         <Sidebar />

//         <div className="posts-section">
         
//           {posts.map((post, index) => (
//             <Post key={index} post={post} />
//           ))}
//         </div>
//         <div className="friends-section">
          
//           {friends.map((friend, index) => (
//             <Friend key={index} friend={friend} />
//           ))}
//         </div>
        
//       </div>
    
//     </div>
//   );
// };

// export default Landing;
const Landing = () => {
  return (
    <div className="landing-page">
      <div className="stories-section">
        <div className="stories">
          {stories.map((story, index) => (
            <Story key={index} story={story} />
          ))}
        </div>
      </div>
      <div className="main-content">
        <Sidebar />
        <div className="feed-container">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className="friends-list-container">
          {friends.map((friend, index) => (
            <Friend key={index} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
