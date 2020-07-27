import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let customUrl = url
    if (country) {
        customUrl = `${url}/countries/${country}`
    }
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(customUrl)

    return { confirmed, recovered, deaths, lastUpdate }
}

export const dailyFetchData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modfiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modfiedData
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {

    }
}