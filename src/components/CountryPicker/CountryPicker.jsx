import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index'

export default function CountryPicker({ handleCountry }) {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI()
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountry(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => (
                    <option value={country} key={i}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}