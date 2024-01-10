import React from 'react'

const Square = ({ colorValue, hexValue, isDarkColor }) => {
  return (
    <div 
        className='square'
        style={
            {backgroundColor: colorValue ? colorValue : "#fff",
             color: isDarkColor ? "#000" : "#fff" }
        }
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>  
      <p>{hexValue ? hexValue : null }</p>  
    </div>
  )
}

export default Square