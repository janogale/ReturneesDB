import React from 'react'
import { useField } from 'formik'

const TextInput = props => {
  const [field, meta] = useField(props)

  // extra classes
  const { extraclases } = props
  return (
    <>
      <input
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 ${extraclases ||
          ''}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="bg-red-100 text-red-700 text-xs rounded absolute sm:inline">
          {meta.error}
        </span>
      ) : null}
    </>
  )
}

export default TextInput
