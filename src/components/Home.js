import React from 'react'

// Charts
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import DoughnutChart from './charts/DoughnutChart'

// images
// import home from '../assets/img/home.jpg'

function Home() {
  return (
    <div className="container w-full mx-auto pt-10">
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        {/* Console Content */}

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-green-600">
                    <i className="fas fa-users fa-2x fa-fw fa-inverse"></i>{' '}
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Total Returnees
                  </h5>
                  <h3 className="font-bold text-3xl">
                    3249{' '}
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-orange-600">
                    <i className="fas fa-money-check-alt fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Total Assisted
                  </h5>
                  <h3 className="font-bold text-3xl">
                    249{' '}
                    <span className="text-orange-500">
                      <i className="fas fa-exchange-alt"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-yellow-600">
                    <i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    New Returnees in 2019
                  </h5>
                  <h3 className="font-bold text-3xl">
                    421
                    <span className="text-yellow-600">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-blue-600">
                    <i className="fas fa-plane fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Back to Home Support
                  </h5>
                  <h3 className="font-bold text-3xl">132 Cases</h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-indigo-600">
                    <i className="fas fa-ambulance fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Health Support
                  </h5>
                  <h3 className="font-bold text-3xl">17 Cases</h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/* Metric Card */}
            <div className="bg-white border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-red-600">
                    <i className="fas fa-walking fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-500">
                    Voluntary Return
                  </h5>
                  <h3 className="font-bold text-3xl">23 Cases</h3>
                </div>
              </div>
            </div>
            {/* /Metric Card */}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-b-1 border-gray-400 my-8 mx-4" />
        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <LineChart />
          <BarChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default Home
