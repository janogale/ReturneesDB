import React from 'react'

// images
import reports from '../assets/img/reports.png'

function Reports() {
  return (
    <div className="min-h-full">
      <div className="flex flex-col relative justify-center items-center pt-6">
        <div className="uppercase text-4xl mb-4">Returnees Reports</div>
        <div className="w-2/4">
          <img src={reports} alt="reports" />
        </div>
        <div
          className="absolute flex flex-col justify-center items-center text-white  inset-0"
          style={{ background: '#2d3748ba' }}
        >
          <div className="text-4xl">Reports Coming Soon...</div>
          <div className="text-md text-green-100 bg-green-600 px-5 py-2 mt-4 rounded cursor-pointer">
            Working on Amazing Reports View.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
