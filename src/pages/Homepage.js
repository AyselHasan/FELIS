import React from 'react'
import News from "./../components/News";
import Favorites from "./../components/Favorites";
import Products from "./../components/Products";
import About from "./../components/About";
import Contact from "./../components/Contact";

const Homepage = () => {
  return (
    <>
      <News />
      <Favorites />
      <Products />
      <About />
      <Contact />
    </>
  )
}

export default Homepage
