import React from 'react'
import { Link } from 'react-router-dom'
import { TableHead, TableTD } from './partials/Tags'

// images
import returnee1 from '../assets/img/returnee1.jpg'
import returnee2 from '../assets/img/returnee2.jpg'

// test DB

import { DB } from './db'

function ListView() {
  return (
    <div className="flex flex-col mx-4 mt-12">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <TableHead>Name</TableHead>
                <TableHead>Current Location</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Returned Date</TableHead>
                <TableHead></TableHead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {DB.map((person, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <TableTD>
                    <div className="flex items-center cursor-pointer">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={index % 2 ? returnee2 : returnee1}
                          alt="returnee"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {`${person.firstName} ${person.lastName}`}
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          #54038743
                        </div>
                      </div>
                    </div>
                  </TableTD>
                  <TableTD>
                    <div className="text-sm leading-5 text-gray-900">
                      {person.CurrentTown}
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      {person.currentDistrict}
                    </div>
                  </TableTD>
                  <TableTD>
                    <div className="text-sm leading-5 text-gray-900">
                      {person.hostCountry}
                    </div>
                    <div className="text-sm leading-5 text-gray-500">San`a</div>
                  </TableTD>
                  <TableTD>
                    <div className="text-sm leading-5 text-gray-900">
                      {person.destinationRegion}
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      {person.destinationTown}
                    </div>
                  </TableTD>
                  <TableTD>12/05/2018</TableTD>
                  <TableTD>
                    <Link
                      to="/certificate"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                    >
                      Certificate
                    </Link>
                  </TableTD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListView
