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
              src="/РАЗ РАЗ РАЗ ЭТО ХАРДБАСС ВСЕ В СПОРТИВКАХ АДИДАС И НА НАЙКЕ ПАЦАНЫ СЛУШАЮТ ХАРДБАСС БАСЫ!!!!!!!!!!!! [SD7TJF452zs].webm"
              type="video/mp4"
          />
          Your browser does not support the video tag.
      </video>
  )
}

export default Video