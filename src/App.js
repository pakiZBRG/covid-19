import React from 'react';
import {Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import corona from './corona.svg'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  //Populate data when component mounts with fetched data from API
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  //change data depending on country
  handleCountry = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country: country })
  }

  render(){
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountry={this.handleCountry}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
