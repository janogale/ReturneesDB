import React from 'react'

// table head
export const TableHead = ({ extra = '', children }) => {
  return (
    <th
      className={`px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ${extra}`}
    >
      {children}
    </th>
  )
}

// Table Cell TD

export const TableTD = ({ children, extra = '' }) => {
  return (
    <td
      className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 ${extra}`}
    >
      {children}
    </td>
  )
}

// flex Div

export const FlexDiv = ({ extra = '', children }) => {
  return <div className={`flex flex-col sm:flex-row ${extra}`}>{children}</div>
}

// Div

export const MyDiv = ({
  extra = 'px-3 mb-6 md:mb-0',
  width = 'md:w-1/3',
  children,
}) => {
  return <div className={`w-full ${width}  ${extra}`}>{children}</div>
}

// DivInput

export const DivInput = ({ extra = '', width = 'w-11/12', children }) => {
  return <div className={`pl-4 ${width} m-4 ${extra}`}>{children}</div>
}

// Submit Button
export const Submit = ({ extra = '', children }) => {
  return (
    <div className="mt-6">
      <button
        type="submit"
        className={`group relative w-1/5 flex justify-center mb-4 ml-auto font-extrabold py-2 px-4 border border-transparent font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out ${extra}`}
      >
        {children}
      </button>
    </div>
  )
}
