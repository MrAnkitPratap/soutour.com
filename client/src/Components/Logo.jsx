import React from 'react'
import { SliderData } from '../utils/constants'
import Home from './Home'
import BookNow from './BookNow'
import Tours from './Tours'
import Contact from './Contact'


const Logo = () => {
  return (
    <div>
      <Home slides = {SliderData} />
      <BookNow/>
      <Tours/>
      <Contact/>
    </div>
  )
}

export default Logo
