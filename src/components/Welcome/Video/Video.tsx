import React from 'react'

const Video = () => {
  return (
      <video
          autoPlay
          loop
          muted
          className="absolute z-10 h-full w-full object-cover"
      >
          <source
              src="/welcome.webm"
              type="video/mp4"
          />
          Your browser does not support the video tag.
      </video>
  )
}

export default Video