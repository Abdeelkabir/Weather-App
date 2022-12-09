import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  const loadOptions = (inputValue) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c4cf49c03msh9db7c2fba18f710p1b3813jsn69623409cab1',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    }

    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
