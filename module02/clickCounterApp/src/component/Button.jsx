import React from 'react'

export const Button = ({label,onPress}) => {
  return (
    <button onClick={onPress} className='shadow p-4 hover:bg-gray-200'>{label}</button>
  )
}
