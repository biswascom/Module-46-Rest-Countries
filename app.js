const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countriesData => {
    const countriesDisplay = document.getElementById('countries');
    let countryData = countriesData.map(countryOne => country(countryOne));
    countriesDisplay.innerHTML = countryData.join(' ');
};

const country = country => {
    const { name, flags, capital, languages } = country;
    return `
        <div class="inside">
            <h2>${name.common}</h2>
            <p>Capital: ${capital}</p>
            <p>Language: ${languages ? (Object.values(languages)).slice(0, 2) : 'Undefined'}</p>
            <img src="${flags.png}" alt="">
        </div>
    `;
};

loadCountries();