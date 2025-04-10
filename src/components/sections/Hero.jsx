/*
Hero Section

Main Headline: Tired of Endless Scrolling?
Sub-headline/Paragraph: Discover simple, refreshing things you can do right now instead of getting lost in your phone. Reclaim your moments, find your focus.
Primary CTA Button Text: Explore Activities Now (Links to Ideas Page)
*/

import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full h-screen bg-white p-4'>
        <div className="container max-w-7xl flex flex-col items-center text-center">
          <h1 className="mb-8 font-extrabold text-6xl dark:text-blue-600 ">Tired of Endless Scrolling?</h1>
          <p className="text-lg mb-8">Discover simple, refreshing things you can do right now instead of getting lost in your phone. Reclaim your moments, find your focus.</p>
          <a href="/ideas" className="shadow-md bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">Explore Activities Now</a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection