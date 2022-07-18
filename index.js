const form = document.querySelector("form")
const section = document.getElementById("weather")

form.onsubmit = async e => {
    e.preventDefault()
    const userLocation = form.search.value
    form.search.value = ""
    section.innerHTML = ""
    if (!userLocation) return
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=imperial&appid=cbf6a4540c5e167330be7dd558d11f9a`)

        if (response.status !== 200) throw new Error ('Location not found. Please enter a valid city. (Ex: "Daytona Beach")')

        const weather = await response.json()
        renderWeatherData(weather)
        console.log(weather)
    } catch (err) {
        const errMessage = document.createElement('h2')
        errMessage.innerHTML = err.message
        section.appendChild(errMessage)
    }
}

const renderWeatherData = (weather) => {
    section.innerHTML = `<h2>${weather.name}, ${weather.sys.country}</h2>`

    const googleMaps = document.createElement('a')
    googleMaps.href = `https://www.google.com/maps/search/?api=1&query=${weather.coord.lat},${weather.coord.lon}`
    googleMaps.textContent = 'Click to view map'
    section.appendChild(googleMaps)

    const icon = document.createElement('img')
    icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    icon.alt = weather['weather'][0]['description']
    section.appendChild(icon)

    const condition = document.createElement('p')
    condition.textContent = `${weather.weather[0].description}\n`
    condition.style.textTransform = 'capitalize'
    section.appendChild(condition)

    const currentTemp = document.createElement('p')
    currentTemp.textContent = `Current temperature is ${weather.main.temp}\u00B0 F`
    section.appendChild(currentTemp)

    const feelslike = document.createElement('p')
    feelslike.textContent = `Feels like ${weather.main.feels_like}\u00B0 F`
    section.appendChild(feelslike)

    const time = weather.dt*1000
    const date = new Date(time)
    const timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
    })

const lastUpdate = document.createElement('p')
lastUpdate.textContent = `Last updated at ${timeString}`
section.appendChild(lastUpdate)

}
