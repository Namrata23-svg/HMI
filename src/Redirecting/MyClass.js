import React from 'react'
import MyComponent from '../pages/changing'

const MyClass = () => {
  return (
    <div>
        <MyComponent/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:"-60px" }}>
        <iframe 
  width="960" 
  height="569" 
  src="https://www.youtube.com/embed/R_2DCYl4VaA" 
  // https://www.youtube.com/watch?v=R_2DCYl4VaA
  frameborder="0" 
  allowfullscreen
></iframe>
</div>
    </div>
  )
}

export default MyClass