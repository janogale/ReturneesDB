import React from 'react'

// Components

import { TextInputLabeled, TextAreaLabeled, SelectField } from './Inputs'

import Collapsible from './Collapsible'

import { FlexDiv, MyDiv, DivInput } from './Tags'

function RegisterPartThree() {
  return (
    <>
      {/* Depedents Information */}
      <Collapsible title="Add Depedents">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-6 w-full">
              <MyDiv>
                <TextInputLabeled
                  name="dFirstName"
                  type="text"
                  autoComplete="true"
                  label="Depedent First Name"
                />
              </MyDiv>
              <MyDiv>
                <TextInputLabeled
                  name="dLastName"
                  type="text"
                  autoComplete="true"
                  label="Depedent Last Name"
                />
              </MyDiv>
              <MyDiv>
                <TextInputLabeled
                  name="dMiddleName"
                  type="text"
                  autoComplete="true"
                  label="Depedent Middle Name"
                />
              </MyDiv>
            </div>

            <div className="flex flex-wrap  mb-2">
              <MyDiv>
                <TextInputLabeled
                  name="dDateOfBirth"
                  type="text"
                  autoComplete="true"
                  label="Depedent Date Of Birth"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextInputLabeled
                  name="dPhot"
                  type="file"
                  autoComplete="true"
                  label="Depedent Photo"
                />
              </MyDiv>
              <MyDiv>
                <SelectField
                  name="relationship"
                  label="RelationShip"
                  options={[
                    'Father',
                    'Mather',
                    'Spouse',
                    'Daughter',
                    'Son',
                    'Grand Parent',
                    'Grand Child',
                  ]}
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled name="dRemarks" label="Depedent Remarks" />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>
      {/* Education Skills */}
      <Collapsible title="ID Documents">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/3">
                <TextInputLabeled
                  name="docNumber"
                  type="text"
                  autoComplete="true"
                  label="Document Number"
                />
              </MyDiv>
              <MyDiv width="md:w-1/3">
                <TextInputLabeled
                  name="documentIssuedDate"
                  type="date"
                  autoComplete="true"
                  label="Date Of Issue"
                />
              </MyDiv>
              <MyDiv width="md:w-1/3">
                <TextInputLabeled
                  name="documentExpiryDate"
                  type="date"
                  autoComplete="true"
                  label="Date Of Expiry"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled
                  name="documentRemarks"
                  label="Document Remarks"
                />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>

      {/* Contact Person */}
      <Collapsible title="Contact Person">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="contactPersonName"
                  type="text"
                  autoComplete="true"
                  label="Contact Person Full Name"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="contactPersonRelationship"
                  type="text"
                  autoComplete="true"
                  label="Contact Person Relationship"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="contactPersonPhone"
                  type="text"
                  autoComplete="true"
                  label="Contact Person Telephone"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="contactPersonLocation"
                  type="text"
                  autoComplete="true"
                  label="Contact Person Location"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="contactPersonAddress"
                  type="text"
                  autoComplete="true"
                  label="Contact Person Address"
                />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>

      {/* Assistance Received */}
      <Collapsible title="Assistance Received" extra="font-bold">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="otherAssistanceReceived"
                  type="text"
                  autoComplete="true"
                  label="Other Assistance Received"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="assistanceProvider"
                  type="text"
                  autoComplete="true"
                  label="Assistance Provider"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="dateOfAssistance"
                  type="text"
                  autoComplete="true"
                  label="Date of Assistance Provision"
                />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>
    </>
  )
}

export default RegisterPartThree
