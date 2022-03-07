import React from 'react'
import '../../styles/TextBox.css'
const TextBox = ({placeholder}) => {
  return (
    <div className='textBoxWrapper'>
        <input className ="textBox" placeholder={placeholder}/>
    </div>
  )
}

export default TextBox 