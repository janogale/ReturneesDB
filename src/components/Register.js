import React from 'react'
import { Formik, Form } from 'formik'

// Components

import { Submit } from './partials/Tags'
import PartOne from './partials/FormPart1'
import PartTwo from './partials/FormPart2'
import PartThree from './partials/FormPart3'

// input fields for Formik
import initialValues from './partials/InitialValues'

// RegisterForm
function Register() {
  return (
    <Formik
      initialValues={{
        ...initialValues,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <div className="m-6 mb-20 px-2 bg-gray-100">
        <h1 className="py-4 pl-8 mb-4 text-lg font-bold">
          Register New Person
        </h1>

        {/* Form starts here */}
        <Form className="w-full">
          <section className="part1">
            <span className="text-xs text-purple-900 bg-gray-400 rounded-full py-1 px-3 mb-2 inline-block">
              Part 1
            </span>
            <PartOne />
          </section>
          <section className="part2 mt-20">
            <span className="text-xs text-purple-900 bg-gray-400 rounded-full py-1 px-3 mb-2 inline-block">
              Part 2
            </span>
            <PartTwo />
          </section>
          <section className="part3 mt-20">
            <span className="text-xs text-purple-900 bg-gray-400 rounded-full py-1 px-3 mb-2 inline-block">
              Part 3
            </span>
            <PartThree />
          </section>
          <Submit>Register</Submit>
        </Form>
      </div>
    </Formik>
  )
}

export default Register
