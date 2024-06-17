import React from 'react'

const Description = ({ text }) => {
  const formatDescription = text.replace(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  return <p>{formatDescription}</p>;
}

export default Description