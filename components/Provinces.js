import styled from 'styled-components'

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

    span {
        display: block;
        font-size: 14px;
        font-weight: 500;
        padding-left: 25%;
        text-align: left;

        &:first-of-type {
            color: #a0a0a0;
            font-weight: 400;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
    }
`

export default function ProvinceCard({ locations }) {
    // format number with comma separators
    const formatNumber = num =>
        num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <section>
            <h3>Province/Territory Breakdown</h3>
            {locations.map(({ province, latest }) => (
                <div>
                    <CardInfo>
                        <div style={{ width: '100%' }}>
                            <span>Province</span>
                            <span>{province}</span>
                        </div>

                        <div style={{ width: '100%' }}>
                            <span>Confirmed</span>
                            <span>{latest.confirmed}</span>
                        </div>

                        <div style={{ width: '100%' }}>
                            <span>Deaths</span>
                            <span>{latest.deaths}</span>
                        </div>
                    </CardInfo>
                </div>
            ))}
        </section>
    )
}
