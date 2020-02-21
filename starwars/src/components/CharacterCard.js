import React from 'react';

const CharacterCard = (props) => {
    console.log('props here!!', props);
    
    return(
        <div>
            <h2>{props.data.name}</h2>
            <p><strong>Birth Year:</strong>{props.data.birth_year}</p>
            <p><strong>Height:</strong>{props.data.height} inches</p>
            <p><strong>Mass:</strong>{props.data.mass} stones</p>
        </div>

    )
}

export default CharacterCard;