import colorNames from 'colornames'
import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkColor, setIsDarkColor }) => {
  return (
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="color">Add Color Name</label>
        <input 
            id='color'
            type="text"
            placeholder='Add Color Name' 
            value={colorValue}
            onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }
            }
        />
        <button 
            type='button'
            onClick={()=> setIsDarkColor(!isDarkColor)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input