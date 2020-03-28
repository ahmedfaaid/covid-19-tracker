import { createGlobalStyle } from 'styled-components'
import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        position: relative;
        background: #f0f0f0;
    }
`

function indexPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest' />
        </>
    )
}

export default indexPage
