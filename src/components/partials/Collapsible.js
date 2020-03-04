import React, { useState } from 'react'

function Collapsible({ children, title, isOpen = false }) {
  const [hide, setHide] = useState(isOpen)

  const svgArrow = hide ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'

  return (
    <section className="shadow mb-2">
      <div className="border-l-2 border-transparent">
        <header
          onClick={() => setHide(!hide)}
          className="flex justify-between bg-gray-200 items-center p-3 pl-8 pr-8  cursor-pointer select-none"
        >
          <span className="font-thin text-xl text-gray-700 font-semibold">
            {title}
          </span>
          <div className=" w-7 h-7 flex items-center justify-center text-green-400">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={svgArrow}
              />
            </svg>
          </div>
        </header>
        {hide && children}
      </div>
    </section>
  )
}

export default Collapsible
