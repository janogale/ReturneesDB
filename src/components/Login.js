import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

// components
import TextInput from './Text-Input'

// images
import logo from '../assets/img/ndra-banner.png'
import ksrelief from '../assets/img/ksrelief.png'
import iom from '../assets/img/iom.png'

function Login() {
  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .min(4, 'Username must minimum 4 characters!')
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <div className="flex items-center justify-center py-4 px-4">
        <div className="max-w-md w-full">
          <div className="bg-gray-400 rounded-md">
            <img className="mx-auto h-auto w-auto" src={logo} alt="NDRA" />
          </div>
          <div>
            <h2 className="mt-2 text-center text-2xl leading-9 font-extrabold text-gray-600">
              NDRA - Returnees Database
            </h2>
            <p className="m-4 text-center text-xl leading-5 text-gray-600 max-w">
              Please Login
            </p>
          </div>
          <div className="flex justify-center bg-white py-6 max-w-xs m-auto rounded-md">
            <Form>
              <div className="rounded-md shadow-sm">
                <div>
                  <TextInput
                    aria-label="UserName"
                    name="userName"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mt-2">
                  <TextInput
                    aria-label="Password"
                    name="password"
                    type="password"
                    extraclases="mt-5"
                    placeholder="Password"
                    autoComplete="true"
                  />
                </div>
              </div>

              <div className="mt-6  flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </Form>
          </div>
          <div className="mt-4 flex justify-around text-gray-600 text-center text-xs border-t border-gray-700 pt-2">
            <div>
              Funded by:
              <img className="w-24 mt-1 m-auto" src={ksrelief} alt="NDRA" />
            </div>
            <div>
              Implemented by:
              <img className="w-16 mt-1 m-auto" src={iom} alt="NDRA" />
            </div>
          </div>
        </div>
      </div>
    </Formik>
  )
}

export default Login
