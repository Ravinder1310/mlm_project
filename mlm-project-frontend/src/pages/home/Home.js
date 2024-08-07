import React from 'react'
import Slider from '../../components/Slider/Slider'
import HomeLinks from '../../components/HomeLinks/HomeLinks'
import Tasks from '../../components/Tasks/Tasks'
import Layout from '../../components/Layout'
function Home() {
  return (
    <Layout title={"Home - Rita Drinks"}>
    <div className="sm:w-2/5 mx-auto bg-red-500 pb-16">
      <Slider/>
     <HomeLinks/>
     <Tasks/>
    </div>
    </Layout>
  )
}

export default Home
