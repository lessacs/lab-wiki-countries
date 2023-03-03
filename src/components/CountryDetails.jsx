import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const CountryDetails = (props) => {
const {countries} = props
// const [country, setCountry] = useState(null)
const { alpha3Code } = useParams()
console.log(alpha3Code) 
const country = countries.find(element => alpha3Code === element.alpha3Code)

return <h1>Hey</h1>
// const fetchCountry = async () => {
//     try {
//         const raw = await fetch(`/${country.alpha3Code}`)
//         const res = await raw.json()
//         setCountry(res[0])
//     } catch (error) {
//         next(error)
//     }
// }


//   return (
//     <div>
//     <h2>CountryDetails</h2>
//     {country.name.common}
//     {country.capital}
//     {country.area}
//     {country.borders}
//     </div>
//   )
}

export default CountryDetails