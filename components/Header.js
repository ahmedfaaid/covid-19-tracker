import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

import { device } from '../device'
import { colors } from '../constants/colors'

const Navbar = styled.nav`
    width: 100%;
    /* background: linear-gradient(
        to right,
        ${colors['Oxford Blue']},
        ${colors['Independence']}
    ); */
    display: flex;
    justify-content: center;
    padding: 20px 0;
    font-size: 1.5rem;

    @media ${device.mobileL} {
        font-size: 1rem;
    }
`

const LogoHeading = styled.h1`
    display: inline-block;
    margin: 0 10px;
    color: #fff;
`

export default function Header() {
    return (
        <Navbar>
            <div>
                <span style={{ fontSize: '2rem' }}>
                    <FontAwesomeIcon icon={faVirus} />
                </span>
                <LogoHeading>COVID-19 Tracker</LogoHeading>
                <span style={{ fontSize: '2rem' }}>
                    <FontAwesomeIcon icon={faVirus} />
                </span>
            </div>
        </Navbar>
    )
}
