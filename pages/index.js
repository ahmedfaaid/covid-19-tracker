import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'

function indexPage() {
    return (
        <>
            <Header />
            <main>
                <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest' />
            </main>
        </>
    )
}

export default indexPage
