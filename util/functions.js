// format number with comma separators for country populations
export const formatNumber = num =>
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

// remove duplicate objectsfrom array
export const removeDuplicates = arr => {
    const userHashMap = {}

    const newArr = arr.filter(item => {
        let alreadyExists = userHashMap.hasOwnProperty(item.region.iso)

        return alreadyExists ? false : (userHashMap[item.region.iso] = 1)
    })

    return newArr
}

// filter selected country
export const filteredCountry = (arr, selected) => {
    return arr.filter(c => c.region.iso === selected)
}

// total stats
export const stats = arr => {
    const totals = arr.reduce((acc, curr) => {
        return {
            confirmed: acc.confirmed + curr.confirmed,
            deaths: acc.deaths + curr.deaths,
            recovered: acc.recovered + curr.recovered
        }
    })

    return totals
}
