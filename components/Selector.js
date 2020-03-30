import { useState, useEffect } from 'react'
import useStatistics from '../src/useStatistics'

import Spinner from './Spinner'
import LocalCases from './LocalCases'

export default function Selector({ url }) {
    const { statistics, isLoading, error } = useStatistics(url)
    const [selectedCountryCode, setSelectedCountryCode] = useState('CA')
    const [country, setCountry] = useState('Canada')
    const [province, setProvince] = useState('Ontario')

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const locations = statistics.locations.sort()

    // console.log(selectedCountryCode, country, province)

    return (
        <section>
            <h2>COVID-19 statistics by country</h2>
            <select
                onChange={e => {
                    setSelectedCountryCode(e.target.value)
                }}
            >
                {locations.map(({ id, country, country_code, province }) => (
                    <option
                        key={id}
                        selected={selectedCountryCode === country_code}
                        value={country_code}
                    >
                        {province && province !== ''
                            ? `${country} - ${province}`
                            : `${country}`}
                    </option>
                ))}
            </select>
        </section>
    )
}
