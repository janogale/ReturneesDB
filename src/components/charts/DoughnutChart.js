import React, { Component } from 'react'
import Chart from 'chart.js'

export default class LineGraph extends Component {
  chartRef = React.createRef()

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: ['Recieved', 'Returned', 'Assisted'],
        datasets: [
          {
            label: 'Issues',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    })
  }
  render() {
    return (
      <div className="w-full md:w-1/2 p-3">
        <div className="bg-white border rounded shadow">
          <div className="border-b p-3">
            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
          </div>
          <div className="p-5">
            <canvas id="myChart" ref={this.chartRef} />
          </div>
        </div>
      </div>
    )
  }
}
