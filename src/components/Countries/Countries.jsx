import { useEffect } from "react";
import { useState } from "react";
import SecondCountry from "../SecondCountry/SecondCountry";
import '../Countries/Countries'
import '../Countries/countries.css'
// import Country from "../Country/Country";
// import '../Country/Country'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then((res) => res.json())
            .then((data) => { setCountries(data) })
    }, []);

    const handleVisitedCountry = (country) => {
        console.log('Add this to your visited country');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = (flag) => {
        // console.log('flag adding')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (

        <div className="countries">
            <h3>Countries : {countries.length}</h3>
            <div>
            {/* visited countries */}
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    visitedFlags.map((flag,id) => <img key={id} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map((country) => <SecondCountry key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></SecondCountry>)
                }
            </div>
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