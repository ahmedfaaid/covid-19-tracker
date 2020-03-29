import { useState } from 'react'
import useStatistics from '../src/useStatistics'

import Spinner from './Spinner'
import LocalCases from './LocalCases'

export default function Selector({ url }) {
    const { statistics, isLoading, error } = useStatistics(url)
    const [selectedCountry, setSelectedCountry] = useState('CA')

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const locations = statistics.locations

    return (
        <section>
            <h2>COVID-19 statistics by country</h2>
            <select>
                {locations.map(({ id, country, country_code, province }) => (
                    <option key={id} value={country_code}>
                        {province ? `${country} - ${province}` : `${country}`}
                    </option>
                ))}
            </select>
        </section>
    )
}
