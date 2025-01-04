import React from 'react'
import Achievement from '../components/Achievement'
import MeetMe from '../components/MeetMe'
import { useEffect } from "react";


const About = () => {

    useEffect(() => {
      window.scroll(0, 0);

    }, []);

  return (
    <div>
      <Achievement />
      <MeetMe />
    </div>
  )
}

export default About