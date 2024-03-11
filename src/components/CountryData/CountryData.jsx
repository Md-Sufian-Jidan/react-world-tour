const CountryData = ({country,handleVisitedCountry, handleVisitedFlags}) => {

    console.log('inside Country Data', country,handleVisitedCountry, handleVisitedFlags);
    return (
        <div>
            <h3>Country Data : {country.name.common}</h3>
        </div>
    );
};

export default CountryData;