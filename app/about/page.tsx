import React from 'react'
import Banner from '../components/aboutpage/Banner/Banner'
import Quotes from '../components/aboutpage/Quotes/Quotes'
import Result from '../components/aboutpage/Result/Result'
import Cards from '../components/aboutpage/Cards/Cards'
import Talk from '../components/aboutpage/Talk/Talk'

function page() {
  return (
    <div>
      <Banner/><Quotes/><Result/><Cards/><Talk/>
    </div>
  )
}

export default page
