import React from "react";
import "./countryCard.css";

const countryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="countryCard-flag"
      />
      <h3 className="countryCard-name">{country.name.common}</h3>
    </div>
  );
};

export default countryCard;
