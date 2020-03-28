import styled from 'styled-components'

const ConfirmedBox = styled.div`
    background: #7d70ba;
    width: 300px;
    padding: 40px 30px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export default function Confirmed({ confirmed }) {
    return (
        <ConfirmedBox>
            <h3>CONFIRMED CASES:</h3>
            <span
                style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    fontSize: '26px',
                    borderBottom: '1px solid #fff',
                }}
            >
                {confirmed}
            </span>
        </ConfirmedBox>
    )
}
