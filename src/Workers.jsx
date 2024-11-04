import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import post from "./images/post.png";
import homefull from "./images/home-full.png";
import profile from "./images/profile.png";
import Searchbar from "./components/searchbar";
import Showservice from "./components/Showservice";
import worker1 from "./images/worker1.jpg";
import worker2 from "./images/worker2.png";

function Workers() {
  return (
    <div>
      <Topbar workersBg="bg-yellow-400" />
      <Searchbar />
      <Showservice
        image={worker1}
        title="Abhinav C"
        price="Electrician, Plumber, Landscaper"
      />
      <Showservice
        image={worker2}
        title="Niggesh NP"
        price="Plumber"
      />

      <Navbar posticon={post} homeicon={homefull} profileicon={profile} />
    </div>
  );
}

export default Workers;
