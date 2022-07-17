//
var URL = 'https://api.openweathermap.org/data/2.5/weather'
var div = document.getElementById('weather-app')
var section = document.getElementById('weather')
var search = document.getElementById('weather-search')
var form = document.querySelector('form')

form.onclick = async  (e) => {
    e.preventDefault() //prevent automatic form submission
    const userInput = weatherSearch.value
    const queryString = `?units=imperial&appid=752927b6e41474a250396108bc4941a3&q=${userInput}`
    const newURL = `${URL}${queryString}`
        if(!userInput) return
        let res = await fetch(newURL)
        if(res.status !== 200) throw new Error('Location not found. Please enter a valid city.') {
            weatherSearch.value = ""
            return res.json()
        }
        res = await res.json()
        displayData(res)
}
