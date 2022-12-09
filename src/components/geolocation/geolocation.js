import { useEffect } from 'react'

const Geolocation = ({ onCoordChange }) => {
  useEffect(() => {
    const geolocationAPI = navigator.geolocation
    if (!geolocationAPI) {
      alert('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position

          onCoordChange({
            value: `${coords.latitude} ${coords.longitude}`,
          })
        },
        (err) => {
          alert(
            `ERROR(${err.code}): ${err.message},  You need to allow access to your location`
          )
        }
      )
    }
  }, [onCoordChange])
  return <div className='loader'></div>
}

export default Geolocation
