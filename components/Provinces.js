import styled from 'styled-components'

import { device } from '../device'
import { formatNumber } from '../util/functions'

// Card styling from https://codepen.io/keenanpayne/pen/bOpxJv
const CardInfo = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 5px 25px 0 rgba(34, 43, 55, 0.2);
    display: flex;
    justify-content: space-between;
    margin: 0 auto 10px auto;
    padding-bottom: 45px;
    padding-top: 45px;
    width: 70%;

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

const Heading3 = styled.h3`
    text-align: center;
    margin: 30px 0;
    padding: 30px 0;

    @media ${device.mobileL} {
        margin: 15px 0;
        padding: 15px 0;
        font-size: 14px;
    }
`

export default function ProvinceCard({ countryData, countryName }) {
    return (
        <section>
            <Heading3>
                PROVINCE/STATE BREAKDOWN FOR {countryName.toUpperCase()}
            </Heading3>
            {countryData.map(
                ({
                    confirmed,
                    confirmed_diff,
                    deaths,
                    deaths_diff,
                    recovered,
                    recovered_diff,
                    region
                }) => (
                    <div key={region.province}>
                        <CardInfo>
                            <div>
                                <span>Province/State</span>
                                <span>{region.province}</span>
                            </div>

                            <div>
                                <span>Confirmed</span>
                                <span>{formatNumber(confirmed)}</span>
                                <span
                                    style={{
                                        fontWeight: 'normal',
                                        marginTop: '10px',
                                        color: '#7d70ba'
                                    }}
                                >
                                    {formatNumber(confirmed_diff)} New Cases
                                </span>
                            </div>

                            <div>
                                <span>Deaths</span>
                                <span>{formatNumber(deaths)}</span>
                                <span
                                    style={{
                                        fontWeight: 'normal',
                                        marginTop: '10px',
                                        color: '#424242'
                                    }}
                                >
                                    {formatNumber(deaths_diff)} New Deaths
                                </span>
                            </div>

                            <div>
                                <span>Recovered</span>
                                <span>{formatNumber(recovered)}</span>
                                <span
                                    style={{
                                        fontWeight: 'normal',
                                        marginTop: '10px',
                                        color: '#87ceeb'
                                    }}
                                >
                                    {formatNumber(recovered_diff)} New
                                    Recoveries
                                </span>
                            </div>
                        </CardInfo>
                    </div>
                )
            )}
        </section>
    )
}
