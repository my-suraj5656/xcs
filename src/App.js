import React, { useState, useEffect } from "react";
import CountryCard from "./countryCard/countryCard";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]); // All countries data
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [filteredCountries, setFilteredCountries] = useState([]); // Filtered countries data

  useEffect(() => {
    // Fetch country data
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data); // Set all countries
        setFilteredCountries(data); // Initialize filtered countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Update filtered countries whenever searchTerm or countries change
  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, countries]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a country..."
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="countries-container">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
