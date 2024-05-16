import React from 'react'
import Banner from '../components/licenespage/Banner/Banner'
import Photography from '../components/licenespage/Photography/Photography'
import Unsplash from '../components/licenespage/Unsplash/Unsplash'
import Pexels from '../components/licenespage/Pexels/Pexels'
import IconFont from '../components/licenespage/IconFont/IconFont'

function page() {
  return (
    <div><Banner/><Photography/><Unsplash/><Pexels/>
    <IconFont/></div>
  )
}

export default page