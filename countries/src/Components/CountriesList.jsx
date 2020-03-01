import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import { Grid, Card, Body, Name, Picture, Bold } from '../Components/Styled-Components/Countries';

const regions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];


class CountriesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedRegion: null,
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

  handleChange = selectedRegion => {
    this.setState({ selectedRegion },
    () => axios.get(`https://restcountries.eu/rest/v2/region/${this.state.selectedRegion.value}
    `)
    .then(res => {
      console.log(res.data);
      this.setState({
        countries: res.data
      })
     
    })
    );
  };

  render() {

    const { selectedRegion } = this.state;

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
         <Select
        value={selectedRegion}
        onChange={this.handleChange}
        options={regions}
      />
      <Grid>
        {allCountries}
      </Grid>
      </>
    )
  }
}

export default CountriesList;