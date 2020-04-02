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
    margin: 0 12px;

    &:hover {
        color: #000;
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <div>
                    <p style={{ color: '#fff', fontSize: '18px' }}>
                        &copy; {new Date().getFullYear()} -
                        <IconLink
                            href='https://ahmedfaaid.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            alt='Ahmed Alhassan'
                        >
                            Created by Ahmed Alhassan
                        </IconLink>
                    </p>
                </div>
                <div>
                    <p style={{ color: '#fff', fontSize: '18px' }}>
                        <IconLink
                            href='https://github.com/ahmedfaaid/covid-19-tracker'
                            target='_blank'
                            rel='noopener noreferrer'
                            alt='Covid-19 Tracker Repo'
                        >
                            Find the Github Repository here
                        </IconLink>
                    </p>
                </div>
                <div>
                    <SocialList>
                        <li style={{ listStyle: 'none' }}>
                            <IconLink
                                href='https://twitter.com/mr_amed'
                                target='_blank'
                                rel='noopener noreferrer'
                                alt={`Ahmed's Twitter`}
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconLink>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <IconLink
                                href='https://github.com/ahmedfaaid'
                                target='_blank'
                                rel='noopener noreferrer'
                                alt={`Ahmed's Github`}
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
