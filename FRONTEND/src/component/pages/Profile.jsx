import React from "react";
import photo1 from "../asset/image/bgpurple.jpg";
import post1 from "../asset/image/poll1.jpg";
import post2 from "../asset/image/poll2.jpg"
import post3 from "../asset/image/poll3.jpg"
import post4 from "../asset/image/poll4.jpg"

const Profile = () => {
  const post = [post1, post2, post3, post4,post1, post2, post3, post4,post1, post2, post3, post4];
  return <div className="container m-3"> 
      <div className="max-w-3xl mx-auto mt-10 font text-purple-900">
      <div className="flex items-center space-x-4">
        <img
          src={photo1}
          alt=""
          className="w-24 h-24 rounded-full  "
        />
        <div>
          <h1 className="text-2xl font-semibold">Username</h1>
          <p className="">@username</p>
        </div>
      </div>
      <div className="mt-6 ">
        <div className="flex space-x-4">
          <div>
            <span className="font-semibold">10</span> posts
          </div>
          <div>
            <span className="font-semibold">100</span> followers
          </div>
          <div>
            <span className="font-semibold">150</span> following
          </div>
        </div>
        <p className="mt-4">Bio: This is a sample bio of the user.</p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-1  ">
        {post.map((post, index) => (
          <img
            key={index}
            src={post}
            alt={`Post ${index + 1}`}
            className="w-full h-32 object-cover border-3 border-purple-900 "
          />
        ))}
      </div>
    </div>


  </div>;
};

export default Profile;
