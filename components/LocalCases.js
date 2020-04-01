import styled from 'styled-components'
import useStatistics from '../src/useStatistics'

import Spinner from './Spinner'
import Provinces from './Provinces'

import countryCodes from '../country-codes'

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

    div {
        width: 100%;

        &:not(:last-of-type) {
            border-right: 1px solid #e0e0e0;
        }
    }

    span {
        display: block;
        font-size: 14px;
        font-weight: 500;
        padding-left: 25%;
        text-align: center;

        &:first-of-type {
            color: #a0a0a0;
            font-weight: 400;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
    }
`

const LocalCases = ({ url, code }) => {
    const { statistics, isLoading, error } = useStatistics(url)

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    const { latest, locations } = statistics

    const countryObj = countryCodes.filter(country =>
        country.code === code ? `${country.name}` : null
    )

    const countryName = countryObj[0].name

    return (
        <>
            <h2
                style={{
                    textAlign: 'center',
                    margin: '30px 0 30px 0',
                    padding: '30px 0',
                }}
            >
                STATISTICS FOR {countryName.toUpperCase()}
            </h2>
            <div>
                <CardInfo>
                    <div>
                        <span>Confirmed</span>
                        <span>{latest.confirmed}</span>
                    </div>

                    <div>
                        <span>Deaths</span>
                        <span>{latest.deaths}</span>
                    </div>
                </CardInfo>
            </div>
            {Array.isArray(locations) && locations.length > 1 ? (
                <Provinces countryName={countryName} locations={locations} />
            ) : null}
        </>
    )
}

export default LocalCases
