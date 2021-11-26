import styled from 'styled-components'
import useStatistics from '../util/useStatistics'

import Spinner from './Spinner'
import Provinces from './Provinces'
import LineChart from './LineChart'

import { device } from '../device'
import { colors } from '../constants/colors'

import { filteredCountry, formatNumber, stats } from '../util/functions'
import countryCodes from '../iso2-country-codes'

// Card styling from https://codepen.io/keenanpayne/pen/bOpxJv
const CardInfo = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 5px 25px 0 rgba(34, 43, 55, 0.2);
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    padding-bottom: 45px;
    padding-top: 45px;
    width: 80%;
    margin: auto;

    @media ${device.mobileL} {
        display: block;
        padding-bottom: 30px;
        padding-top: 30px;
    }

    div {
        width: 100%;

        @media ${device.mobileL} {
            width: 50%;
            margin: auto;
        }

        &:not(:last-of-type) {
            border-right: 1px solid #e0e0e0;

            @media ${device.mobileL} {
                margin-bottom: 20px;
                padding-bottom: 30px;
                border-right: none;
                border-bottom: 1px solid #e0e0e0;
            }
        }
    }

    span {
        display: block;
        font-size: 14px;
        font-weight: 500;
        padding-left: 25%;
        text-align: center;

        @media ${device.mobileL} {
            padding-left: 0;
        }

        &:first-of-type {
            color: #a0a0a0;
            font-weight: 400;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
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
        font-size: 16px;
    }
`

const LocalCases = ({ countries, iso, isLoading, error }) => {
    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const countryData = filteredCountry(countries, iso)

    const totals = stats(countryData)

    return (
        <>
            <Heading2>
                STATISTICS FOR {countryData[0].region.name.toUpperCase()}
            </Heading2>
            <div style={{ marginBottom: '10px' }}>
                <CardInfo>
                    <div>
                        <span>Confirmed</span>
                        <span>{formatNumber(totals.confirmed)}</span>
                        <span
                            style={{
                                fontWeight: 'normal',
                                marginTop: '10px',
                                color: colors['Space Cadet']
                            }}
                        >
                            {formatNumber(totals.confirmed_diff)} New Cases
                        </span>
                    </div>

                    <div>
                        <span>Deaths</span>
                        <span>{formatNumber(totals.deaths)}</span>
                        <span
                            style={{
                                fontWeight: 'normal',
                                marginTop: '10px',
                                color: '#424242'
                            }}
                        >
                            {formatNumber(totals.deaths_diff)} New Deaths
                        </span>
                    </div>

                    <div>
                        <span>Recovered</span>
                        <span>{formatNumber(totals.recovered)}</span>
                        <span
                            style={{
                                fontWeight: 'normal',
                                marginTop: '10px',
                                color: colors['Maximum Blue Green']
                            }}
                        >
                            {formatNumber(totals.recovered_diff)} New Recoveries
                        </span>
                    </div>
                </CardInfo>
            </div>
            <LineChart countryName={countryData[0].region.name} />
            {Array.isArray(countryData) && countryData.length > 1 ? (
                <Provinces
                    countryName={countryData[0].region.name}
                    countryData={countryData}
                />
            ) : null}
        </>
    )
}

export default LocalCases
