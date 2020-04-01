import styled from 'styled-components'
import useStatistics from '../src/useStatistics'

import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Spinner from './Spinner'
import Provinces from './Provinces'

const CasesWrapper = styled.section`
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    color: #fff;
`

const LocalCases = ({ url }) => {
    const { statistics, isLoading, error } = useStatistics(url)

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const { latest, locations } = statistics

    return (
        <>
            <h2>Country Statistics</h2>
            <CasesWrapper>
                <Confirmed confirmed={latest.confirmed} />
                <Deaths deaths={latest.deaths} />
            </CasesWrapper>
            {Array.isArray(locations) && locations.length > 1 ? (
                <Provinces locations={locations} />
            ) : null}
        </>
    )
}

export default LocalCases
