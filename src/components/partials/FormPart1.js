import React from 'react'

// Components

import {
  TextInputLabeled,
  TextAreaLabeled,
  SelectField,
  RadioBox,
} from './Inputs'

import Collapsible from './Collapsible'

import { FlexDiv, MyDiv, DivInput } from './Tags'

function RegisterPartOne() {
  return (
    <>
      {/* Basic Information */}
      <Collapsible title="Basic Information" isOpen={true}>
        <FlexDiv extra="mt-4">
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
      </Collapsible>
      {/* Contact Details */}
      <Collapsible title="Contact Details">
        <FlexDiv extra="mt-4">
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
      </Collapsible>

      {/* Traditional Leaders */}
      <Collapsible title="Traditional Leaders">
        <FlexDiv extra="mt-4">
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
      </Collapsible>

      {/* Location */}
      <Collapsible title="Current Location">
        <FlexDiv extra="mt-4">
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
                  name="currentRegion"
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
                  name="currentDistrict"
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
                  name="CurrentTown"
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
      </Collapsible>

      {/* Final Destination */}
      <Collapsible title="Final Destination">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/4">
                <SelectField
                  name="destinationRegion"
                  label="Final Destination Region"
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
                  name="destinationDistrict"
                  label="Destination District"
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
                  name="destinationTown"
                  type="text"
                  autoComplete="true"
                  label="Destination Town"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4 mt-6">
                <RadioBox
                  name="DestinationSameAsOrigin"
                  options={['Yes', 'No']}
                  label="Final Destionation same as Origin Location"
                />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>
    </>
  )
}

export default RegisterPartOne
