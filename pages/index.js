import React, { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request'
import TextField from '@material-ui/core/TextField';
import useDebounce from '../use_debounce';
import Business_list from '../components/business_lists';

const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization: 'Bearer MnK_Y-ptjS0OoNmBlHNFBqqYpn4wDGFiacMyoTN1xewehyupzX6Ma3HgLP0vB3yN5Y2skldkyyTHNmOMv947iyGQEgmNARLVMFUTqgQpIm2RrOlxMYiy7oQ6N4efXHYx',
    "Accept-Language": "en_CA"
  },
})

import Header from '../components/Header'
import Button from '@material-ui/core/Button';
import Timer from '../components/timer'

// This is the Link API

const Index = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("Waterloo");
  const debouncedSearchTerm = useDebounce(search, 500);

  const query = `query {
    search (location: "${debouncedSearchTerm}") {
      business {
        name
        id
        phone
        review_count
        rating
      }
    }
  }`

  useEffect(() => {
    client.request(query).then(data => setData(data))
  }, [query]);

  let {
    search: searchData = {}
  } = data;

  let {
    business = []
  } = searchData;

  return (<div>
    <Header href="/about" title="About Page">
      <Button variant="contained" color="primary">About Page</Button>
    </Header>
    <TextField
      id="standard-name"
      label="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      margin="normal"
    />
    <Business_list business={business}></Business_list>
    <Timer></Timer>
  </div>
  )
}

export default Index