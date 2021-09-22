import React from "react";
import Links from "./Links";

function About({user}) {
  const { bio } = user
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user}/>
    </div>
  );
}

export default About;
