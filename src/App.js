import Search from './components/search/search'
import { useState } from 'react'
import CurrentWeather from './components/current_weather/currentweather'
import Forcast from './components/forecast/forcast'
import Geolocation from './components/geolocation/geolocation'
import './App.css'

function App() {
  const [isShown, setIsShown] = useState(false)
  const handleClick = () => {
    setIsShown(true)
  }
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forcast, setForcast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=212c7eeb68e67c2504463e37866c94dd&units=metric`
    )

    const forcastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=212c7eeb68e67c2504463e37866c94dd&units=metric`
    )
    Promise.all([currentWeatherFetch, forcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forcastResponse = await response[1].json()
        setCurrentWeather({ ...weatherResponse })
        setForcast({ ...forcastResponse })
      })
      .catch((err) => alert(`ERROR(${err.code}): ${err.message}`))
    setIsShown(false)
  }

  return (
    <div>
      <div className='intro'>
        {' '}
        Hello, please use the box below to search for a city. Or you can use GPS
        to locate your position by clicking the button below.
      </div>
      <Search onSearchChange={handleOnSearchChange} />
      <button className='buton' onClick={handleClick}>
        Use GPS
      </button>
      {isShown && (
        <Geolocation onCoordChange={handleOnSearchChange}></Geolocation>
      )}

      {currentWeather && (
        <CurrentWeather data={currentWeather}></CurrentWeather>
      )}

      {forcast && <Forcast data={forcast}></Forcast>}
    </div>
  )
}

export default App
