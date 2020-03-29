import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'
import Selector from '../components/Selector'

function indexPage() {
    return (
        <>
            <Header />
            <main>
                <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest' />
                <Selector url='https://coronavirus-tracker-api.herokuapp.com/v2/locations' />
            </main>
        </>
    )
}

export default indexPage
