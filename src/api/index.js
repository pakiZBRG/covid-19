import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

//Fetch data for countries
export const fetchData = async (country) => {
    let changeableUrl = url
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl) 
        
        console.log(confirmed)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch(err){
        console.log(err)
    }
}

//fetach data for material UI Chart
export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`)
        
        const modifiedData = data.slice(100, -1).map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData
    } catch(err){
        console.log(err)
    }
}

//Fetch all countries (188)
export const fetchCountries = async () => {
    try{
        const { data: {countries} } = await axios.get(`${url}/countries`)

        return countries.map(country => {return country.name})
    } catch(err){
        console.log(err)
    }
}