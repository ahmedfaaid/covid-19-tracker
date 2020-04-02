import styled from 'styled-components'

import { device } from '../device'

const DeathBox = styled.div`
    background: #424242;
    width: 300px;
    padding: 40px 30px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media ${device.mobileL} {
        margin: 0 auto;
    }
`

export default function Confirmed({ deaths }) {
    return (
        <DeathBox>
            <h3>DEATHS:</h3>
            <span
                style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    fontSize: '26px',
                    borderBottom: '1px solid #fff',
                }}
            >
                {deaths}
            </span>
        </DeathBox>
    )
}
