import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";

const CharacterCardContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect (() => {
        axios 
        .get("https://swapi.co/api/people/")
        .then(res => {
            console.log('star', res.data.results);
            setData(res.data.results);
        })
        .catch(err => {
            console.log("darn, you got an error", err);
        });
    }, []);

    return(
        <div className="container">
        {data.map(character => (
            <CharacterCard key={character.url} data={character} />
        ))}
        </div>
    );
};

export default CharacterCardContainer;