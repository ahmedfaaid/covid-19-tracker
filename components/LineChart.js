import Chart from 'react-apexcharts'

function LineChart() {
    const chartData = {
        options: {
            chart: {
                id: 'basic-bar',
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: [
                    1991,
                    1992,
                    1993,
                    1994,
                    1995,
                    1996,
                    1997,
                    1998,
                    1999
                ]
            }
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    }
    return (
        <Chart
            options={chartData.options}
            series={chartData.series}
            type='line'
            width='500'
        />
    )
}

export default LineChart
