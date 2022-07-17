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
