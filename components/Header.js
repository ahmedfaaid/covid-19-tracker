import styled from 'styled-components'

const Navbar = styled.nav`
    width: 100%;
    background: linear-gradient(to right, #dec1ff, #7d70ba);
    display: flex;
    justify-content: center;
    padding: 20px 0;
`

const LogoHeading = styled.h1`
    display: inline-block;
    margin-left: 10px;
    color: #fff;
`

export default function Header() {
    return (
        <Navbar>
            <div>
                <span>🦠</span>
                <LogoHeading>Covid-19 Tracker</LogoHeading>
            </div>
        </Navbar>
    )
}
