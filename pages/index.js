import { useState, useEffect } from 'react'

import { initGA, logPageView } from '../util/analytics'

import GlobalCases from '../components/GlobalCases'
import Header from '../components/Header'
import Selector from '../components/Selector'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'

function indexPage() {
    const [geolocation, setGeolocation] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchLocation() {
            setIsLoading(true)

            try {
                const location = await fetch('https://freegeoip.live/json/')
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

        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }

        logPageView()
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    return (
        <>
            <Header />
            <main>
                <GlobalCases url='https://covid-api.com/api/reports/total' />
                <Selector
                    geolocation={geolocation}
                    url='https://covid-api.com/api/reports'
                />
            </main>
            <Footer />
        </>
    )
}

export default indexPage
