import styled from 'styled-components'

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

export default function ProvinceCard({ locations, countryName }) {
    // format number with comma separators for country populations
    // const formatNumber = num =>
    //     num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <section>
            <h3
                style={{
                    textAlign: 'center',
                    margin: '30px 0 30px 0',
                    padding: '30px 0',
                }}
            >
                PROVINCE/TERRITORY BREAKDOWN FOR {countryName.toUpperCase()}
            </h3>
            {locations.map(({ province, latest }) => (
                <div>
                    <CardInfo>
                        <div>
                            <span>Province/State/Territory</span>
                            <span>{province}</span>
                        </div>

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
            ))}
        </section>
    )
}
