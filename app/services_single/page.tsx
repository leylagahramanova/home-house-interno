import React from 'react'
import Banner from '../components/singlepage/Banner/Banner'
import Details from '../components/singlepage/Details/Details'
import Brands from '../components/mainpage/Brands/Brands'
import Counter from '../components/mainpage/Counter/Counter'
import Result from '../components/singlepage/Result/Result'
import Points from '../components/singlepage/Points/Points'

function page() {
  return (
    <div><Banner/><Details/><Brands/><Points/><Result/><Counter/></div>
  )
}

export default page