import GlobalCases from '../components/GlobalCases'

function indexPage() {
    return (
        <div>
            <h1>Corona be gone!</h1>
            <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest'></GlobalCases>
        </div>
    )
}

export default indexPage
