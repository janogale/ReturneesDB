import React, { Component } from 'react'
import Chart from 'chart.js'

export default class LineGraph extends Component {
  chartRef = React.createRef()

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'Returnee Movemont',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Assisted Returnees',
            data: [5, 15, 10, 30],
            type: 'line',
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
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
