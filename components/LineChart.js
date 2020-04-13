import dynamic from 'next/dynamic'
// allow chart to render in ssr environment
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import useStatistics from '../util/useStatistics'
import { useState } from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'

const ChartWrapper = styled.div`
    text-align: center;
    width: 500px;
    margin: 30px auto;
`

const SwitchButton = styled.div`
    background: #dec1ff;
    color: #fff;
    width: 200px;
    margin: 10px auto;
    padding: 15px;
    border: 1px solid #fff;
    border-radius: 0.5em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;

    &:hover {
        background: #7d70ba;
        transition: all 0.1s ease-in;
    }

    &:active {
        transform: translateY(2px);
    }
`

function LineChart({ countryName }) {
    const { statistics, isLoading, error } = useStatistics(
        'https://pomber.github.io/covid19/timeseries.json'
    )

    const [dataShown, setDataShown] = useState('Confirmed')

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    // isolate data
    const dates = statistics[countryName].map(data => data.date)
    const confirmedData = statistics[countryName].map(data => data.confirmed)
    const deathsData = statistics[countryName].map(data => data.deaths)

    console.log(dates, confirmedData)

    // chart options
    const options = {
        chart: {
            id: 'basic-bar',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime',
            categories: dates
        },
        colors: [
            dataShown === 'Confirmed'
                ? '#7d70ba'
                : dataShown === 'Deaths'
                ? '#424242'
                : null
        ],
        title: {
            text:
                dataShown === 'Confirmed'
                    ? 'Confirmed cases'
                    : dataShown === 'Deaths'
                    ? 'Deaths'
                    : null,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#7d70ba'
            }
        }
    }

    // chart data
    const series = [
        {
            name: dataShown,
            data:
                dataShown === 'Confirmed'
                    ? confirmedData
                    : dataShown === 'Deaths'
                    ? deathsData
                    : null
        }
    ]

    // toggle method
    const switchData = () => {
        if (dataShown === 'Confirmed') {
            setDataShown('Deaths')
        } else if (dataShown === 'Deaths') {
            setDataShown('Confirmed')
        }
    }

    return (
        <ChartWrapper>
            <Chart options={options} series={series} type='line' width='500' />
            <SwitchButton onClick={switchData}>
                Switch to{' '}
                {dataShown === 'Confirmed'
                    ? 'Deaths'
                    : dataShown === 'Deaths'
                    ? 'Confirmed'
                    : null}
            </SwitchButton>
        </ChartWrapper>
    )
}

export default LineChart
