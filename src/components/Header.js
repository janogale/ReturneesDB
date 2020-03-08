import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { LoginContext } from '../context/LoginContext'

// images
import logo from '../assets/img/logo.png'

function Header() {
  const user = useContext(LoginContext)
  return (
    <>
      <Link to="/" className="ml-2 mr-auto flex items-center justify-between">
        <img className="h-8 w-8 hover:shadow-2xl" src={logo} alt="" />
        <div className="ml-3 text-xl font-extrabold">NDRA</div>
      </Link>

      <div className="hidden sm:block mr-auto uppercase font-bold">
        Returnees Database
      </div>
      <div className="mr-8">
        <button
          onClick={() => user.setLogin(false)}
          className="bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 focus:outline-none focus:shadow-outline"
          type="button"
        >
          {user.isLoggedIn ? 'Sign out' : '  Sign In'}
        </button>
      </div>
    </>
  )
}

export default Header
