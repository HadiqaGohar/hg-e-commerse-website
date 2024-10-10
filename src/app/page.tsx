import React from 'react'
import Home from './home/page'
import Shop from './selling/page'
import Products from './products/page'
import Offer from './offer/page'
import Clothes from './clothes/page'
import FeedbackCorner from './feedback/page'
import Selling from './selling/page'

function page() {
  return (
    <div>
      <Home/>
      <Selling/>
      <Products/>
      <Offer/>
      <Clothes/>
      <FeedbackCorner/>

    </div>
  )
}

export default page