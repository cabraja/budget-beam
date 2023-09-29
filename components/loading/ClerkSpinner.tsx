'use client'
import BeatLoader from 'react-spinners/BeatLoader'

function ClerkSpinner() {
  return (
    <BeatLoader loading color="#aae261" size={38} className='mt-10' aria-label="Loading"/>
  )
}

export default ClerkSpinner