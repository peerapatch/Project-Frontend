import { Doughnut, Pie, Radar, PolarArea, Bar } from 'react-chartjs-2'
const Chart = (props) => {
  const { data, title, type } = props
  return (
    <>
      {type === 'Bar' && <BarChart data={data} title={title} />}
      {type === 'Doughnut' && <DoughChart data={data} title={title} />}
      {type === 'Pie' && <PieChart data={data} title={title} />}
      {type === 'Radar' && <RadarChart data={data} />}
      {type === 'PolarArea' && <PolarAreaChart data={data} title={title} />}

    </>
  )
}
export default Chart

const BarChart = ({ data = { value: [], name: [] }, title = '' }) => {
  const prepairData = {
    labels: data.name,
    datasets: [{
      label: title,
      data: data.value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 4
    }]
  }

  return <Bar data={prepairData} />
}
const DoughChart = ({ data = { value: [], name: [] }, title = '' }) => {
  const prepairData = {
    labels: data.name,
    datasets: [{
      label: title,
      data: data.value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgb(63, 81, 181, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(63, 81, 181, 1)'
      ],
      hoverOffset: 4,
      borderWidth: 1
    }]
  }

  return <Doughnut data={prepairData} />
}
const PieChart = ({ data = { value: [], name: [] }, title = '' }) => {
  const prepairData = {
    labels: data.name,
    datasets: [{
      label: title,
      data: data.value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgb(63, 81, 181, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(63, 81, 181, 1)'
      ],
      hoverOffset: 4
    }]
  }

  return <Pie data={prepairData} />
}

const RadarChart = ({ data = { value: [], name: [] }, title = '' }) => {
  const prepairData = {
    labels: data.name,
    datasets: [{
      label: title,
      data: data.value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgb(63, 81, 181, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(63, 81, 181, 1)'
      ],
      borderWidth: 1
    }]
  }

  const options = {
    scale: {
      ticks: { beginAtZero: true }
    }
  }

  return <Radar data={prepairData} options={options} />
}

const PolarAreaChart = ({ data = { value: [], name: [] }, title = '' }) => {
  const prepairData = {
    labels: data.name,
    datasets: [{
      label: title,
      data: data.value,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgb(63, 81, 181, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(63, 81, 181, 1)'
      ],
      borderWidth: 1
    }]
  }

  return <PolarArea data={prepairData} />
}
