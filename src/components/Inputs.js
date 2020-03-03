import React from 'react'
import { useField, Field } from 'formik'

const TextInput = props => {
  const [field, meta] = useField(props)

  // extra classNamees
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

// Text input with Label
const TextInputLabeled = props => {
  const [field, meta] = useField(props)

  // extra classNamees
  const { extra, label } = props
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${extra ||
          ''}`}
        {...field}
        {...props}
        placeholder={label || ''}
      />
      {meta.touched && meta.error ? (
        <span className="bg-red-100 text-red-700 text-xs rounded absolute sm:inline">
          {meta.error}
        </span>
      ) : null}
    </>
  )
}

// Text Area with Label
const TextAreaLabeled = props => {
  const [field, meta] = useField(props)

  // extra classNamees
  const { extra, label } = props
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>
      <Field
        component="textarea"
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${extra ||
          ''}`}
        {...field}
        {...props}
        placeholder={label || ''}
      />
      {meta.touched && meta.error ? (
        <span className="bg-red-100 text-red-700 text-xs rounded absolute sm:inline">
          {meta.error}
        </span>
      ) : null}
    </>
  )
}

// select field
const SelectField = ({ label = '', name, extra = '', options = [] }) => {
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        <Field
          component="select"
          name={name}
          className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${extra}`}
        >
          {options.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  )
}

// Radio Box

const RadioBox = ({ label = '', name = '', options = [] }) => {
  return (
    <>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-zip"
      >
        {label}
      </label>
      {options.map((value, index) => (
        <label key={index} className="md:w-2/3 block text-gray-500 font-bold">
          <Field
            name={name}
            className="mr-2 leading-tight"
            type="radio"
            value={value}
          />
          <span className="text-sm">{value}</span>
        </label>
      ))}
    </>
  )
}

export { TextInput, TextInputLabeled, TextAreaLabeled, SelectField, RadioBox }
