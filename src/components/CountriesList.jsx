import { Link } from 'react-router-dom';
import React from 'react'

const CountriesList = (props) => {
    const { countries } = props;
     return (
        <div>
        <h2>CountriesList</h2>
        <ul>
            {countries.map((country) => (
                <li key={country.alpha3Code}>
                    <Link to={`/${country.alpha3Code}`}>
                    <img 
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`${country.name} flag`}/>
                    {country.name.official}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    );
}
export default CountriesList
