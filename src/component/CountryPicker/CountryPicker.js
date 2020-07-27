import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../../api'
import { NativeSelect, FormControl } from '@material-ui/core';



const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setFetchCountries])

    console.log(fetchedCountries)

    return (
        <FormControl>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker