import styled from 'styled-components'
import useStatistics from '../util/useStatistics'

import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Recovered from './Recovered'
import Spinner from './Spinner'

import { device } from '../device'
import { formatNumber } from '../util/functions'
import { colors } from '../constants/colors'

const CasesWrapper = styled.section`
    max-width: 1280px;
    margin: auto;
    padding: 40px 0 100px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    color: #fff;

    @media ${device.mobileL} {
        display: block;
        padding: 10px 0 30px 0;
    }
`

const Heading2 = styled.h2`
    color: #fff;
    text-align: center;
    margin: 30px 0;
    padding: 30px 0;

    @media ${device.mobileL} {
        margin: 15px 0;
        padding: 15px 0;
    }
`

const GlobalCases = ({ url }) => {
    const { statistics, isLoading, error } = useStatistics(url)

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    return (
        <section>
            <Heading2>GLOBAL CASES</Heading2>
            <CasesWrapper>
                <Confirmed
                    confirmed={formatNumber(statistics.data.confirmed)}
                    newCases={formatNumber(statistics.data.confirmed_diff)}
                />
                <Deaths
                    deaths={formatNumber(statistics.data.deaths)}
                    newDeaths={formatNumber(statistics.data.deaths_diff)}
                />
                <Recovered
                    recovered={formatNumber(statistics.data.recovered)}
                    newRecovered={formatNumber(statistics.data.recovered_diff)}
                />
            </CasesWrapper>
        </section>
    )
}

export default GlobalCases
