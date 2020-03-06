import React, { Component } from 'react'
import Chart from 'chart.js'

export default class LineGraph extends Component {
  chartRef = React.createRef()

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Migration Trends',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            lineTension: 0.1,
          },
        ],
      },
      options: {},
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
