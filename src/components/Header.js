import React from 'react'
import { Link } from 'react-router-dom'

// images
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <>
      <Link to="/" className="ml-2 mr-auto flex items-center justify-between">
        <img className="h-8 w-8 hover:shadow-2xl" src={logo} alt="" />
        <div className="ml-3 text-xl font-extrabold">NDRA</div>
      </Link>

      <div className="mr-auto uppercase">Returnee Database</div>
    </>
  )
}

export default Header
