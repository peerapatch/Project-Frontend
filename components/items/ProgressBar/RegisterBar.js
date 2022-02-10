import React from 'react'

const RegisterBar = (props) => {
  const { bgcolor, completed } = props
  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 60,
    marginBottom: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
    textAlign: 'right'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  )
}

export default RegisterBar
