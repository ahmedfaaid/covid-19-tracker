import { useState } from 'react'
import styled from 'styled-components'
import useStatistics from '../src/useStatistics'

import Spinner from './Spinner'
import LocalCases from './LocalCases'

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
`

export default function Selector({ url }) {
    const { statistics, isLoading, error } = useStatistics(url)
    const [selectedCountryCode, setSelectedCountryCode] = useState('CA')

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const { locations } = statistics

    /* START */
    // THIS CODE WILL BE REDUNDANT BUT ITS USEFUL TO REMEMBER FOR THE FUTURE
    // creating a unique array of country names
    // return only country names
    // const countryNamesArr = locations.map(location => location.country)

    // remove duplicates with set
    // const countryNamesObj = new Set(countryNamesArr)

    // convert back to array
    // const allCountryNames = [...countryNamesObj]
    /* END */

    // creating a unique array of country codes and names
    const locationArray = locations.map(({ country, country_code }) => ({
        code: country_code,
        country,
    }))

    const uniqueLocations = Array.from(
        new Set(locationArray.map(arr1 => arr1.code))
    )
        .map(countryCode => {
            return locationArray.find(arr2 => arr2.code === countryCode)
        })
        .sort((obj1, obj2) => {
            const x = obj1.country.toLowerCase()
            const y = obj2.country.toLowerCase()
            if (x < y) return -1
            if (x > y) return 1
            return 0
        })

    // console.log(uniqueLocations)

    return (
        <section>
            <h2
                style={{
                    textAlign: 'center',
                    margin: '30px 0 30px 0',
                    padding: '30px 0',
                }}
            >
                COVID-19 STATISTICS BY COUNTRY
            </h2>
            <Select
                onChange={e => {
                    setSelectedCountryCode(e.target.value)
                }}
            >
                {uniqueLocations.map(({ code, country }) => (
                    <option
                        key={code}
                        selected={selectedCountryCode === code}
                        value={code}
                    >
                        {country}
                    </option>
                ))}
            </Select>
            <LocalCases
                code={selectedCountryCode}
                url={`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${selectedCountryCode}`}
            />
        </section>
    )
}
