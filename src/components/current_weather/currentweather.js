import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import OpacityIcon from '@mui/icons-material/Opacity'
import AirIcon from '@mui/icons-material/Air'
import CompressIcon from '@mui/icons-material/Compress'
import './current_weather.css'
function CurrentWeather({ data }) {
  return (
    <div className='container'>
      <img src={`icons/${data.weather[0].icon}.png`} alt='Weather Icon'></img>
      <div className='temp'>
        <span className='numb'>{Math.round(data.main.temp)}</span>
        <span className='deg'>°</span>C
      </div>
      <div className='weather'>{data.weather[0].description}</div>

      <div className='location'>
        <LocationOnIcon
          style={{
            color: '#43affc',
            fontSize: '25px',
          }}
        />

        <span>{data.name}</span>
      </div>
      <div className='bottom-details'>
        <div className='column feels'>
          <DeviceThermostatIcon
            style={{ color: '#5DBBFF', fontSize: '40px' }}
          />
          <div className='details'>
            <div className='temp'>
              <span className='numb-2'>{Math.round(data.main.feels_like)}</span>
              <span className='deg'>°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div className='column humidity'>
          <OpacityIcon style={{ color: '#5DBBFF', fontSize: '40px' }} />
          <div className='details'>
            <span>{Math.round(data.main.humidity)}</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>

      <div className='bottom-details'>
        <div className='column feels'>
          <AirIcon style={{ color: '#5DBBFF', fontSize: '40px' }} />
          <div className='details'>
            <div className='temp'>
              <span className='numb-2'>{data.wind.speed}</span>
            </div>
            <p>wind </p>
          </div>
        </div>
        <div className='column humidity'>
          <CompressIcon style={{ color: '#5DBBFF', fontSize: '40px' }} />
          <div className='details'>
            <span>{Math.round(data.main.pressure)}</span>
            <p>pressure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
