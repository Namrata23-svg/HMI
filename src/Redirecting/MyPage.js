import React from 'react'
import MyComponent from '../pages/changing'

const MyPage = () => {
  return (
    <div>
        <MyComponent/>
        <iframe 
        src="../assets/saved.pdf"
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