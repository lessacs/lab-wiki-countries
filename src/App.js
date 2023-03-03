import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import countriesArr from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom'



function App() {

  const [countries, setCountries] = useState(countriesArr)

  return (
    <div className="App">
    <Navbar />
    <CountriesList {...{ countries, setCountries }} />

    <Routes>
      <Route path=':alpha3Code' element={<CountryDetails countries={countries}/>} />
    </Routes>
    </div>
  )
}

export default App;
