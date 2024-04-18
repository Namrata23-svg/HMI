import React from 'react'
import MyComponent from '../pages/changing'

const MyPage = () => {
  return (
    <div>
        <MyComponent/>
        <iframe 
        src="https://www.slideshare.net/JustEngineering/what-is-hmi"
        width="100%" 
        height="569" 
        frameborder="0" 
        allowfullscreen="true" 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  )
}

export default MyPage