import React, { Component } from 'react';
// import Select from 'react-select';
import axios from 'axios';

import { Grid, Card, Body, Name, Picture, Bold } from '../Components/Styled-Components/Countries';

class CountriesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
    
  }
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        console.log(res.data);
        this.setState({
          countries: res.data
        })
       
      })
  }

  render() {

    const { countries } = this.state;
    const allCountries = countries.map(country => {
      return (
          <Card>
            <Picture alt='country flag' src={country.flag}></Picture>
            <Body><Name>{country.name}</Name>
            <p><Bold>Population:</Bold> {country.population}</p> 
            <p><Bold>Region:</Bold> {country.region}</p> 
            <p><Bold>Capital:</Bold> {country.capital}</p> 
            </Body>
          </Card>
      )
    })

    return (
      <>
      <Grid>
        {allCountries}
      </Grid>
      </>
    )
  }
}

export default CountriesList;