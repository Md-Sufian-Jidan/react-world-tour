import { useEffect } from "react";
import { useState } from "react";
import SecondCountry from "../SecondCountry/SecondCountry";
import '../Countries/Countries'
import '../Countries/countries.css'
// import Country from "../Country/Country";
// import '../Country/Country'

const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {setCountries(data)})
    },[]);


    return (
        
        <div className="countries country-container">
        <h3>Countries : {countries.length}</h3>
            {
                countries.map((country) => <SecondCountry key={country.cca3} country={country}></SecondCountry>)
            }
        </div>
        // <div className="countries">
        //     <h3>Countries : {countries.length}</h3>
        //     {
        //         countries.map((country) => 
        //         <Country key={country.cca3} country={country}></Country>)
        //     }
        // </div>
    );
};

export default Countries;