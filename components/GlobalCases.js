import styled from 'styled-components'
import useStatistics from '../src/useStatistics'

import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Spinner from './Spinner'

const CasesWrapper = styled.section`
    max-width: 1280px;
    margin: auto;
    padding: 40px 0 100px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    color: #fff;
`

const GlobalCases = ({ url }) => {
    const { statistics, isLoading, error } = useStatistics(url)

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    return (
        <section>
            <h2
                style={{
                    textAlign: 'center',
                    margin: '30px 0 30px 0',
                    padding: '30px 0',
                }}
            >
                GLOBAL CASES
            </h2>
            <CasesWrapper>
                <Confirmed confirmed={statistics.latest.confirmed} />
                <Deaths deaths={statistics.latest.deaths} />
            </CasesWrapper>
        </section>
    )
}

export default GlobalCases
