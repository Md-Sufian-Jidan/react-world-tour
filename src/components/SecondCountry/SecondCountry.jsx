import { useState } from 'react';
import '../SecondCountry/SecondCountry.css'
const SecondCountry = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name , flags,population, area, cca3} = country

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => {
    //     handleVisitedCountry(country)
    // };


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'white'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited?' I have Visited this Country.' : 'I want to visit'}
        </div>
    );
};

export default SecondCountry;