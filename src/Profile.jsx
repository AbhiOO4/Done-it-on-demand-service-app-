import Navbar from "./components/Navbar";
import React from "react";
import home from "./images/home.png";
import post from "./images/post.png";
import profilefull from "./images/profile-full.png";
import UserProfile from "./components/UserProfile";
import Topbar2 from "./components/Topbar2";
import PostCard from "./components/PostCard";
import tv from './images/tv.png'
import car from './images/car.png'

function Profile() {
  return (
    <div>
      <UserProfile />
      <Topbar2 Posts="border-b-4" />
      <div className="m-3">
        <select
          name="Mode"
          id=""
          className="rounded-3xl border-gray-300 border p-2"
        >
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>
      <PostCard
      Image={tv}
      Problem="Somehting wrong with the tv display"
      Time="Posted 3hrs ago"/>
      <PostCard
      Image={car}
      Problem="Car starts but doesnt move when in gear"
      Time="Posted 1hr ago"/>
      <Navbar homeicon={home} posticon={post} profileicon={profilefull} />
    </div>
  );
}

export default Profile;
