import React from 'react'

// images
import home from '../assets/img/home.jpg'

function Home() {
  return (
    <div className="flex flex-col h-screen relative justify-center items-center">
      <div className="uppercase text-4xl mb-4">Returnees Database</div>
      <div className="w-2/4">
        <img src={home} alt="reports" />
      </div>
      <div
        className="absolute flex flex-col justify-center items-center text-white  inset-0"
        style={{ background: '#2d3748ba' }}
      >
        <div className="text-4xl">Welcome to NDRA Database</div>
        <div className="text-md text-green-100 bg-green-600 px-5 py-2 mt-4 rounded cursor-pointer">
          Working on Amazing Reports View.
        </div>
      </div>
    </div>
  )
}

export default Home
