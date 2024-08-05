import React from 'react'
import Slider from '../../components/Slider/Slider'
import HomeLinks from '../../components/HomeLinks/HomeLinks'
import Tasks from '../../components/Tasks/Tasks'
function Home() {
  return (
    <div className="sm:w-2/5 mx-auto bg-orange-300">
      <Slider/>
     <HomeLinks/>
     <Tasks/>
    </div>
  )
}

export default Home
