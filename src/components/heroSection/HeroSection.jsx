import React from 'react'

function HeroSection() {
  return (
    <div>
        <video width="100%" height="auto" loop muted autoPlay>
            <source src="https://videos.pexels.com/video-files/4605192/4605192-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default HeroSection