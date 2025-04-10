/*
Main Call-to-Action (CTA) Section

CTA Headline: Ready to Reclaim Your Time?
CTA Text: Stop the mindless scroll. Discover easy activities designed to refresh your mind, boost your focus, or simply help you engage with the world around you.
CTA Button Text: Find Your Next Activity (Links to Ideas Page)
*/

import React from 'react'

const CTA = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white p-4'>
      <h1 className='mb-4 font-extrabold text-4xl dark:text-blue-600'>Ready to Reclaim Your Time?</h1>
      <p>CTA Text: Stop the mindless scroll. Discover easy activities designed to refresh your mind, boost your focus, or simply help you engage with the world around you.</p>
      <a href="">Find Your Next Activity</a>
    </div>
  )
}

export default CTA