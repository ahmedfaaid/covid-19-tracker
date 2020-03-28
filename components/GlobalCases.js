import useStatistics from '../src/useStatistics'
import Spinner from './Spinner'

const GlobalCases = ({ url }) => {
    const { statistics, isLoading, error } = useStatistics(url)

    if (isLoading) return <Spinner />
    if (error) return <p>There was an error</p>

    return (
        <div>
            <div>
                <h3>Confirmed cases:</h3>
                <span>{statistics.latest.confirmed}</span>
            </div>
            <div>
                <h3>Deaths:</h3>
                <span>{statistics.latest.deaths}</span>
            </div>
        </div>
    )
}

export default GlobalCases
