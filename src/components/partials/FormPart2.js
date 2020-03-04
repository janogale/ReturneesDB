import React from 'react'

// Components

import {
  TextInputLabeled,
  TextAreaLabeled,
  SelectField,
  CheckBox,
} from './Inputs'

import Collapsible from './Collapsible'

import { FlexDiv, MyDiv, DivInput } from './Tags'

function RegisterPartOne() {
  return (
    <>
      {/* Migration Information */}
      <Collapsible title="Migration Information">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-6 w-full">
              <MyDiv>
                <SelectField
                  name="hostCountry"
                  label="Host Country"
                  options={[
                    'Yemen',
                    'Saudi',
                    'Libya',
                    'Ethiopia',
                    'Somalia',
                    'Kenya',
                    'UAE',
                    'Italy',
                    'USA',
                  ]}
                />
              </MyDiv>
              <MyDiv>
                <TextInputLabeled
                  name="totalAbroadStay"
                  type="text"
                  autoComplete="true"
                  label="Total Stay in Abroad (Months)"
                />
              </MyDiv>
              <MyDiv>
                <TextInputLabeled
                  name="dateOfReturn"
                  type="date"
                  autoComplete="true"
                  label="Date Of Return"
                />
              </MyDiv>
            </div>

            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled
                  name="reasonOfReturn"
                  label="Reason Of Return"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled name="returnRemarks" label="Other Remarks" />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>
      {/* Education Skills */}
      <Collapsible title="Education Skills">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/4">
                <SelectField
                  name="EducationLevel"
                  label="Education Level"
                  options={[
                    'Secondary',
                    'Tertirary Education',
                    'University',
                    'Technical Degree',
                  ]}
                />
              </MyDiv>

              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="technicalSkills"
                  autoComplete="true"
                  label="TechnicalSkills"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="businessSkills"
                  autoComplete="true"
                  label="Business Skills"
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <TextInputLabeled
                  name="farmingSkills"
                  autoComplete="true"
                  label="Farming Skills"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled
                  name="educationRemarks"
                  label="Education Remarks"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled name="profession" label="Profession Remarks" />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>

      {/* Vulnerabily */}
      <Collapsible title="Vulnerabily">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap  mb-2">
              <MyDiv width="md:w-1/4">
                <SelectField
                  name="minorCase"
                  label="unaccompanied Minor Case"
                  options={['No', 'Yes']}
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <SelectField
                  name="victimOfTrafficking"
                  label="Victim Of Trafficking"
                  options={['No', 'Yes']}
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <SelectField
                  name="isVulnerable"
                  label="Is Vulnerable ?"
                  options={['Yes', 'No']}
                />
              </MyDiv>
              <MyDiv width="md:w-1/4">
                <CheckBox
                  name="vulnerabilityFactors"
                  options={[
                    'Older Person at risk',
                    'Medical Condition',
                    'Physical Disabilities',
                    'Mental Disabilities',
                    'Pregnant or Lactating',
                    'Single Parent',
                  ]}
                  label="Factors Of Vulnerability (select all that apply)"
                />
              </MyDiv>
              <MyDiv width="md:w-1/2 mt-6">
                <TextAreaLabeled
                  name="vulnerabilityRemarks"
                  label="Vulnerability Remarks"
                />
              </MyDiv>
            </div>
          </DivInput>
        </FlexDiv>
      </Collapsible>

      {/* Case  Remarks */}
      <Collapsible title="Case Remarks" extra="font-bold">
        <FlexDiv extra="mt-4">
          <DivInput>
            <div className="flex flex-wrap w-6/12   mb-2">
              <MyDiv width="mt-6">
                <TextAreaLabeled
                  extra="p-12 h-32"
                  name="caseRemarks"
                  label="Case Remarks"
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
