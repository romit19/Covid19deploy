import React, { useState } from 'react';
import { Cards, CountryPicker, Charts } from './component/index'
import { fetchData } from './api/index'
import './App.css';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    // console.log(this.state)
  }
  render() {

    const { data, country } = this.state
    return (
      <div className="App">
        <h1>COVID PROJECTS</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }


}

export default App;
