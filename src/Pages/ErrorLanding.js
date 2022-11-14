import React from 'react'
import NavBar from '../Layout/Component/NavBar'

function ErrorLanding(props) {
  return (
    <>
        <NavBar/>
        <h1 className='display-2'>{props.message}</h1>
    </>
  )
}

export default ErrorLanding