import { useState, useEffect } from 'react'
import useStatistics from '../src/useStatistics'

import Spinner from './Spinner'
import LocalCases from './LocalCases'

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
        new Set(locationArray.map(a => a.code))
    ).map(countryCode => {
        return locationArray.find(a => a.code === countryCode)
    })

    console.log(uniqueLocations)

    return (
        <section>
            <h2>COVID-19 statistics by country</h2>
            <select
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
            </select>
            <LocalCases
                url={`https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=${selectedCountryCode}`}
            />
        </section>
    )
}
