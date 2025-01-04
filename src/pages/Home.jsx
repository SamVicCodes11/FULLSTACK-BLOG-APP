import React from 'react'
import Featured from './Featured'
import Post from './Post'
import Category from './Category'
import { useEffect } from "react";


const Home = () => {
    // useEffect(() => {
    //   window.scroll(0, 0);
  
   
    // }, []);


  return (
    <div>
      <Featured />
      <Post />
      <Category />
    </div>
  )
}

export default Home