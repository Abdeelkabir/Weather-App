import React from 'react'

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import OpacityIcon from '@mui/icons-material/Opacity'
import AirIcon from '@mui/icons-material/Air'
import CompressIcon from '@mui/icons-material/Compress'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import './forcast.css'

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const Forcast = ({ data }) => {
  const startDay = new Date().getDay()
  const forcastDays = weekDays
    .slice(startDay, weekDays.length)
    .concat(weekDays.slice(0, startDay))
  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((itm, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='item-header'>
                  <img
                    src={`icons/${itm.weather[0].icon}.png`}
                    alt='weather-icon'
                  />
                  <label className='day'>{forcastDays[idx]}</label>

                  <label
                    className={`header-temp${
                      Math.round(itm.main.temp) < 20 ? '-cold' : ''
                    }`}
                  >
                    <span className='header-numb'>
                      {Math.round(itm.main.temp)}
                    </span>
                    <span className='header-deg'>°</span>C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <div className='container'>
                <img
                  src={`icons/${itm.weather[0].icon}.png`}
                  alt='Weather Icon'
                ></img>
                <div className='temp'>
                  <span className='numb'>{Math.round(itm.main.temp)}</span>
                  <span className='deg'>°</span>C
                </div>
                <div className='weather'>{itm.weather[0].description}</div>

                <div className='bottom-details'>
                  <div className='column feels'>
                    <DeviceThermostatIcon
                      style={{ color: '#5DBBFF', fontSize: '40px' }}
                    />
                    <div className='details'>
                      <div className='temp'>
                        <span className='numb-2'>
                          {Math.round(itm.main.feels_like)}
                        </span>
                        <span className='deg'>°</span>C
                      </div>
                      <p>Feels like</p>
                    </div>
                  </div>
                  <div className='column humidity'>
                    <OpacityIcon
                      style={{ color: '#5DBBFF', fontSize: '40px' }}
                    />
                    <div className='details'>
                      <span>{Math.round(itm.main.humidity)}</span>
                      <p>Humidity</p>
                    </div>
                  </div>
                </div>

                <div className='bottom-details'>
                  <div className='column feels'>
                    <AirIcon style={{ color: '#5DBBFF', fontSize: '40px' }} />
                    <div className='details'>
                      <div className='temp'>
                        <span className='numb-2'>{itm.wind.speed}</span>
                      </div>
                      <p>wind </p>
                    </div>
                  </div>
                  <div className='column humidity'>
                    <CompressIcon
                      style={{ color: '#5DBBFF', fontSize: '40px' }}
                    />
                    <div className='details'>
                      <span>{Math.round(itm.main.pressure)}</span>
                      <p>pressure</p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
export default Forcast
