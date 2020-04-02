import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.footer`
    background: #7d70ba;
    padding: 24px 0;
`

const Container = styled.div`
    max-width: 1280px;
    margin: auto;
    /* flex on medium screens */
    display: flex;
    justify-content: space-between;
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    /* margin-top: 12px; */
    /* no margin on mobile */
`

const IconLink = styled.a`
    color: #fff;
    font-size: 18px;
    margin: 12px;

    &:hover {
        color: #000;
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <div>
                    <p style={{ color: '#fff', verticalAlign: 'middle' }}>
                        &copy; {new Date().getFullYear()} - Created by Ahmed
                        Alhassan
                    </p>
                </div>
                <div>
                    <SocialList>
                        <li style={{ listStyle: 'none' }}>
                            <IconLink
                                href='https://instagram.com/sneakersseur'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconLink>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <IconLink
                                href='https://twitter.com/sneakersseur'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </IconLink>
                        </li>
                    </SocialList>
                </div>
            </Container>
        </FooterWrapper>
    )
}
