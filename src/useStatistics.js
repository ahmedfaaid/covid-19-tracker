import { useState, useEffect } from 'react'

export default function useStatistics(url) {
    const [statistics, setStatistics] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            console.log('Loading data')

            setIsLoading(true)

            try {
                const data = await fetch(url)
                    .then(res => res.json())
                    .catch(err => setError(err))

                // if (data.status === 404 && data.error) {
                //     setError(data.error.message)
                // } else {
                //     setError()
                // }

                setStatistics(data)
                setIsLoading(false)
            } catch (error) {
                console.log(`There was a fetch error: ${error}`)
                setError(error)
            }

            console.log('Data loaded')
        }

        fetchData()
    }, [url])

    return { statistics, isLoading, error }
}
