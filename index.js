//
const URL = "6c837dfcef697002afd6a4d3377a8f81&q="
const form = document.querySelector("form")
const section = document.getElementById("weather")
const search = document.getElementById("weather-search")

form.onsubmit = async (e) => {
    e.preventDefault()
    userQuery = search.value
    search.value = ""
    if (!userQuery){
        return
    }
  const forecast = await fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + URL + userQuery)
  .catch()
  const notation = await forecast.json()
    if ((notation.cod && notation.cod != 200) || notation.data){
      locationNotFound()
      return
    } info(notation)
};

const locationNotFound = () => { section.innerHTML = ""
  errMessage = document.createElement('h2')
  errMessage.textContent = 'Location not found. Please enter a valid city.'
  section.replaceChildren(errMessage)
};




//old assignment

// var URL = 'https://api.openweathermap.org/data/2.5/weather'
// var div = document.getElementById('weather-app')
// var section = document.getElementById('weather')
// var search = document.getElementById('weather-search')
// var form = document.querySelector('form')
//
// form.onclick = function(e) {
//   e.preventDefault()
//   userQuery = search.value
//   //Extra parameter to ensure measurements are imperial units:
//   queryString = '?units=imperial&appid=6c837dfcef697002afd6a4d3377a8f81&q=' + userQuery
//   fetchURL = URL + queryString
//   if (!userQuery) return
//   fetch(fetchURL)
//   .then(function(res) {
//     //Error if Location not found
//         if (res.status !== 200) throw new Error('Location not found. Please enter a valid city.')
//         return res.json()
//     })
//     .then(info)
//     .catch(function(err){
//         var errorMessage = document.createElement('h2')
//         errorMessage.innerHTML = err.message
//         section.appendChild(errorMessage)
//         search.value = ""
//     })
// };
//
// function info(forecast){
// //City
//     var location = document.createElement('h2')
//     section.innerHTML = ""
//     location.textContent = (forecast.name + ',' + forecast.sys.country)
//     section.appendChild(location)
// //Google Maps link
//     var mapLink = document.createElement('a')
//     mapLink.href = ('https://www.google.com/maps/search/?api=1&query=' + forecast.coord.lat + ',' + forecast.coord.lon)
//     mapLink.textContent = 'Click to view map'
//     section.appendChild(mapLink).setAttribute('target','_blank')
// //Actual temperature
//     var currentTemp = document.createElement('p')
//     currentTemp.textContent = ('Current temperature is ' + forecast.main.temp + '\u00B0 F')
//     section.appendChild(currentTemp)
// //Perceived temperature
//     var feelsLike = document.createElement('p')
//     feelsLike.textContent = ('Feels like ' + forecast.main.feels_like + ' \u00B0 F')
//     section.appendChild(feelsLike)
//     lineBreak = document.createElement('br')
//     section.appendChild(lineBreak)
// //Weather icon
//     var icon = document.createElement('img')
//     icon.src = ('https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png')
//     icon.alt = forecast.weather[0].description + ('weather icon')
//     section.appendChild(icon)
// //Condition description
//     var textDescription = document.createElement('p')
//     textDescription.textContent = forecast.weather[0].description
//     section.appendChild(textDescription).setAttribute('style','text-transform: capitalize;')
//     lineBreak = document.createElement('br')
//     section.appendChild(lineBreak)
//
// // Last Updated:
//     lastUpdated = document.createElement('p')
//        var date = new Date(forecast.dt * 1000)
//        var timeString = date.toLocaleTimeString('en-US',{
//            hour: 'numeric',
//            minute: '2-digit'
//        })
//    lastUpdated.textContent = ('Last updated at ' + timeString)
//    section.appendChild(lastUpdated)
// };
