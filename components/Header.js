import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

const Navbar = styled.nav`
    width: 100%;
    background: linear-gradient(to right, #dec1ff, #7d70ba);
    display: flex;
    justify-content: center;
    padding: 20px 0;
    font-size: 1.5rem;
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
