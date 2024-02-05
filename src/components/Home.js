import React from 'react'
import Topbar from './Topbar'
import LinkShortner from './LinkShortner'
import Statistics from './Statistics'
import ShowAllUrl from './ShowAllUrl'
const Home = () => {
  return (
    <div className="App h-full flex-col justify-center items-center w-full mx-auto lg:w-1/2 px-10">
      <Topbar/>
        <LinkShortner/>
        <Statistics/>
        <ShowAllUrl/>
    </div>
  )
}

export default Home
