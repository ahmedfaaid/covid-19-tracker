import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { device } from '../device'

const ErrorSection = styled.main`
    width: 100%;
    height: calc(100vh - 238px);
    text-align: center;
    color: #7d70ba;
    position: relative;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
            font-size: 40px;
            display: inline-block;
            padding-right: 12px;
            animation: type 0.5s alternate infinite;

            @media ${device.mobileL} {
                font-size: 20px;
            }
        }

        p {
            padding-right: 12px;
            margin-top: 10px;
        }
    }

    @keyframes type {
        from {
            box-shadow: inset -3px 0px 0px #7d70ba;
        }
        to {
            box-shadow: inset -3px 0px 0px transparent;
        }
    }
`

export default function Custom404() {
    return (
        <>
            <Header />
            <ErrorSection>
                <div>
                    <h1>OOPS THERE WAS AN ERROR</h1>
                    <p>Please reload to try again</p>
                </div>
            </ErrorSection>
            <Footer />
        </>
    )
}
