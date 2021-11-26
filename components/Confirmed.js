import styled from 'styled-components'

import { device } from '../device'
import { colors } from '../constants/colors'

const ConfirmedBox = styled.div`
    background: ${colors['Space Cadet']};
    width: 300px;
    padding: 40px 30px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    @media ${device.mobileL} {
        margin: 0 auto 20px auto;
    }
`

export default function Confirmed({ confirmed, newCases }) {
    return (
        <ConfirmedBox>
            <h3>CONFIRMED CASES:</h3>
            <span
                style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    fontSize: '26px',
                    borderBottom: '1px solid #fff'
                }}
            >
                {confirmed}
            </span>
            <span
                style={{
                    display: 'block',
                    marginTop: '10px',
                    fontSize: '14px'
                }}
            >
                <strong>{newCases}</strong> New Cases
            </span>
        </ConfirmedBox>
    )
}
