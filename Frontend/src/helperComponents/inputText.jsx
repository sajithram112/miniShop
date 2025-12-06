import React, { useState, useRef, useEffect } from 'react'

const InputText = ({ value, type, saveChanges }) => {
  const [inputActive, setInputActive] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputActive])

  const handleChange = (e) => {
    let val = e.target.value

    if (type === 'number') {
      if (/^\d*\.?\d*$/.test(val)) {
        setInputValue(val)
      }
    } else {
      setInputValue(val)
    }
  }

  const handleBlur = () => {
    let finalValue = inputValue

    if (type === 'number') {
      if (inputValue === '.' || inputValue === '') {
        finalValue = value
      } else {
        finalValue = parseFloat(inputValue).toFixed(2)
      }
    }

    setInputValue(finalValue)
    setInputActive(false)
    saveChanges(finalValue)
  }

  return (
    <div className='text-input-container'>
      {inputActive ? (
        <input
          ref={inputRef}
          className='rounded-data-holder'
          type='text'
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <div
          className='rounded-data-holder'
          onClick={() => setInputActive(true)}
        >
          {inputValue}
        </div>
      )}
    </div>
  )
}

export default InputText
