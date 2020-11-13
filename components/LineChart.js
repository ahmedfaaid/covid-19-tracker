import dynamic from 'next/dynamic'
// allow chart to render in ssr environment
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import useStatistics from '../util/useStatistics'
import { useState } from 'react'
import styled from 'styled-components'
import { device } from '../device'

import Spinner from './Spinner'

const ChartWrapper = styled.div`
    text-align: center;
    width: 700px;
    margin: 30px auto;

    @media ${device.mobileL} {
        width: 400px;
    }

    @media ${device.mobileM} {
        width: 100%;
    }
`

// const SwitchButton = styled.div`
//     background: #dec1ff;
//     color: #fff;
//     width: 200px;
//     margin: 10px auto;
//     padding: 15px;
//     border: 1px solid #fff;
//     border-radius: 0.5em;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     cursor: pointer;

//     &:hover {
//         background: #7d70ba;
//         transition: all 0.1s ease-in;
//     }

//     &:active {
//         transform: translateY(2px);
//     }
// `

const Select = styled.select`
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 40%;
    max-width: 100%;
    box-sizing: border-box;
    margin: auto;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &::-ms-expand {
        display: none;
    }

    &:hover {
        border-color: #dec1ff;
    }

    &:focus {
        border-color: #7d70ba;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #222;
        outline: none;
    }

    option {
        font-weight: normal;
    }

    @media ${device.mobileL} {
        min-width: 60%;
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
    const recoveredData = statistics[countryName].map(data => data.recovered)

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
                : dataShown === 'Recovered'
                ? '#87ceeb'
                : null
        ],
        title: {
            text:
                dataShown === 'Confirmed'
                    ? 'Confirmed cases'
                    : dataShown === 'Deaths'
                    ? 'Deaths'
                    : dataShown === 'Recovered'
                    ? 'Recoveries'
                    : null,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#7d70ba'
            },
            align: 'center'
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
                    : dataShown === 'Recovered'
                    ? recoveredData
                    : null
        }
    ]

    return (
        <ChartWrapper>
            <Chart options={options} series={series} type='line' />
            <Select onChange={e => setDataShown(e.target.value)}>
                <option value='Confirmed'>Confirmed</option>
                <option value='Deaths'>Deaths</option>
                <option value='Recovered'>Recoveries</option>
            </Select>
        </ChartWrapper>
    )
}

export default LineChart
