import React from 'react'
import { Formik, Form } from 'formik'

// Components

import {
  TextInputLabeled,
  TextAreaLabeled,
  SelectField,
  RadioBox,
} from './Inputs'
import { FlexDiv, MyDiv, DivInput, Submit } from './partials/Tags'
import initialValues from './partials/InitialValues'

function Register() {
  return (
    <Formik
      initialValues={{
        ...initialValues,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <div className="m-6 bg-gray-100">
        <h1 className="py-4 pl-8 mb-4 text-lg font-bold border-b">
          Register New Person
        </h1>

        {/* Form starts here */}
        <Form className="w-full">
          {/* Basic Information */}
          <FlexDiv>
            <div className="sm:mr-8 pl-4 pb-4 font-semibold md:w-1/8">
              Basic Information
            </div>
            <DivInput>
              <div className="flex flex-wrap  mb-6 w-full">
                <MyDiv>
                  <TextInputLabeled
                    aria-label="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="true"
                    label="First Name"
                    placeholder="First Name"
                  />
                </MyDiv>
                <MyDiv>
                  <TextInputLabeled
                    aria-label="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="true"
                    label="Last Name"
                    placeholder="Last Name"
                  />
                </MyDiv>
                <MyDiv>
                  <SelectField
                    name="gender"
                    label="Gender"
                    placeholder="Select Gender"
                    options={['Male', 'Female']}
                  />
                </MyDiv>
              </div>

              <div className="flex flex-wrap  mb-2">
                <MyDiv>
                  <TextInputLabeled
                    aria-label="birthPlace"
                    name="birthPlace"
                    type="text"
                    autoComplete="true"
                    label="Place of Birth"
                    placeholder="Birth Place"
                  />
                </MyDiv>
                <MyDiv>
                  <TextInputLabeled
                    aria-label="birthDate"
                    name="birthDate"
                    type="date"
                    autoComplete="true"
                    label="Date of Birth"
                  />
                </MyDiv>
                <MyDiv>
                  <RadioBox
                    name="maritalStatus"
                    options={['Married', 'Single']}
                    label="Marital Status"
                  />
                </MyDiv>
              </div>
            </DivInput>
          </FlexDiv>

          {/* Contact Details */}
          <FlexDiv extra="mt-8 pt-4 border-t">
            <div className="sm:mr-12 pl-4 pb-4 font-semibold">
              Contact Details
            </div>
            <DivInput>
              <div className="flex flex-wrap  mb-2">
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="mobile"
                    type="text"
                    autoComplete="true"
                    label="Mobile No."
                    placeholder="Mobile Number"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="tell1"
                    type="tell"
                    autoComplete="true"
                    label="Telephone 1"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="tell2"
                    type="tell"
                    autoComplete="true"
                    label="Telephone 2"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="email"
                    type="email"
                    autoComplete="true"
                    label="Email"
                  />
                </MyDiv>
              </div>
            </DivInput>
          </FlexDiv>

          {/* Traditional Leaders */}
          <FlexDiv extra="mt-8 pt-4 border-t">
            <div className="sm:mr-6 pl-4 pb-4 font-semibold">
              Traditional Leaders
            </div>
            <DivInput>
              <div className="flex flex-wrap  mb-2">
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="clan"
                    type="text"
                    autoComplete="true"
                    label="Clan Name"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="subclan"
                    type="text"
                    autoComplete="true"
                    label="Sub Clan"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="suldan"
                    type="text"
                    autoComplete="true"
                    label="Suldan"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="chief"
                    type="text"
                    autoComplete="true"
                    label="Clan Cheif"
                  />
                </MyDiv>
              </div>
            </DivInput>
          </FlexDiv>

          {/* Location */}
          <FlexDiv extra="mt-8 pt-4 border-t">
            <div className="sm:mr-24 pl-4 pb-4 font-semibold">Location</div>
            <DivInput>
              <div className="flex flex-wrap  mb-2">
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="currentLocation"
                    type="text"
                    autoComplete="true"
                    label="Current Location"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <SelectField
                    name="region"
                    label="Current Region"
                    options={[
                      'MarodiJeh',
                      'Awdal',
                      'Sahil',
                      'Togdher',
                      'Sool',
                      'Sanaag',
                    ]}
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <SelectField
                    name="district"
                    label="Current District"
                    options={[
                      'Ibrahim Koodbuur',
                      'Ahmed Dhagax',
                      '26 June',
                      'M. Haibe',
                      'October',
                      '18 May',
                    ]}
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4">
                  <TextInputLabeled
                    name="town"
                    type="text"
                    autoComplete="true"
                    label="Current Town"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4 mt-6">
                  <TextInputLabeled
                    name="address1"
                    type="text"
                    autoComplete="true"
                    label="Address 1"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/4 mt-6">
                  <TextInputLabeled
                    name="address2"
                    type="text"
                    autoComplete="true"
                    label="Address 2"
                  />
                </MyDiv>
                <MyDiv width="md:w-1/2 mt-6">
                  <TextAreaLabeled
                    name="locationRemarks"
                    label="Current Location Remarks"
                  />
                </MyDiv>
              </div>
            </DivInput>
          </FlexDiv>
          <Submit>Register</Submit>
        </Form>
      </div>
    </Formik>
  )
}

export default Register
