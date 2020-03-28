import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'

function indexPage() {
    return (
        <>
            <Header />
            <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest' />
        </>
    )
}

export default indexPage
