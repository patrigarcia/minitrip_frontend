import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const cities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Sevilla",
    "Zaragoza",
    "Málaga",
    "Murcia",
    "Palma",
    "Las Palmas de Gran Canaria",
    "Bilbao",
    "Alicante",
    "Córdoba",
    "Valladolid",
    "Vitoria-Gasteiz",
    "La Coruña",
    "Granada",
    "Oviedo",
    "Santa Cruz de Tenerife",
    "Pamplona",
    "Almería",
    "San Sebastián",
    "Burgos",
    "Santander",
    "Castellón de la Plana",
    "Albacete",
    "Logroño",
    "Badajoz",
    "Salamanca",
    "Huelva",
    "Lérida",
    "Tarragona",
    "León",
    "Cádiz",
    "Jaén",
    "Ourense",
    "Gerona",
    "Lugo",
    "Cáceres",
    "Melilla",
    "Guadalajara",
    "Toledo",
    "Pontevedra",
    "Palencia",
    "Ciudad Real",
    "Zamora",
    "Ávila",
    "Cuenca",
    "Huesca",
    "Soria",
    "Mérida",
    "Segovia",
    "Ceuta",
    "Teruel",
];

const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length >= 2) {
            const matchedCities = cities.filter((city) => city.toLowerCase().startsWith(value.toLowerCase()));
            setSuggestions(matchedCities);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <Box>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Adonde quieres ir?" />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((city) => (
                        <li key={city}>{city}</li>
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default SearchBar;
