import { useState, useEffect } from 'react'

import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'
import Selector from '../components/Selector'
import Spinner from '../components/Spinner'

function indexPage() {
    const [geolocation, setGeolocation] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchLocation() {
            setIsLoading(true)

            try {
                const location = await fetch('https://freegeoip.app/json/')
                    .then(res => res.json())
                    .catch(err => setError(err))

                setGeolocation(location)
            } catch (error) {
                console.log(`There was a fetch error: ${error}`)
                setError(error)
            }

            setIsLoading(false)
        }

        fetchLocation()
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    return (
        <>
            <Header />
            <main>
                <GlobalCases url='https://coronavirus-tracker-api.herokuapp.com/v2/latest' />
                <Selector
                    geolocation={geolocation}
                    url='https://coronavirus-tracker-api.herokuapp.com/v2/locations'
                />
            </main>
        </>
    )
}

export default indexPage
