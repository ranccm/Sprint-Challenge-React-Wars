import React, { useState, useEffect } from 'react';
import {
    Button
} from 'reactstrap';

import axios from 'axios';
import CharacterCard from "./CharacterCard";

const CharacterCardContainer = (props) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState('https://swapi.co/api/people/')
	const [next, setNext] = useState('')
	const [back, setBack] = useState('')

    useEffect (() => {
        axios 
        .get(page)
        .then(res => {
            console.log('star', res.data.results);
            setData(res.data.results);
            setNext(res.data.next);
            setBack(res.data.previous);
        })
        .catch(err => {
            console.log("darn, you got an error", err);
        });
    }, [page]);

    return(
        <div>
            <Button onClick={() => setPage(back)} key='1'>Back</Button>
            <Button onClick={() => setPage(next)} key='2'>Next</Button>
         

            <div className="container">
                {data.map(character => (
                    <CharacterCard key={character.url} data={character} />
                ))}
            </div>
        </div>
    );
};


export default CharacterCardContainer;
