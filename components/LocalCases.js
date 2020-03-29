import styled from 'styled-components'
import useStatistics from '../src/useStatistics'

import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Spinner from './Spinner'

const CasesWrapper = styled.section`
    height: 30vh;
    min-height: 30vh;
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

    return (
        <CasesWrapper>
            <h2>Local Cases</h2>
            <Confirmed confirmed={statistics.latest.confirmed} />
            <Deaths deaths={statistics.latest.deaths} />
        </CasesWrapper>
    )
}

export default LocalCases
