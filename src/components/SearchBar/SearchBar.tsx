import React, { useState } from "react";
import { Input, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

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
        <Box w="20vw" mr="2vw">
            <Input type="text" value={inputValue} onChange={handleChange} placeholder="Adonde quieres ir?" mb={2} bgColor="white" />
            {suggestions.length > 0 && (
                <List spacing={2}>
                    {suggestions.map((city) => (
                        <ListItem key={city} p={2} bg="gray.100" borderRadius="md">
                            <ListIcon as={MdLocationOn} color="green.500" />
                            {city}
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default SearchBar;
