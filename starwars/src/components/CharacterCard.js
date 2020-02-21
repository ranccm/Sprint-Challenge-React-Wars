import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const CharacterCard = (props) => {
    console.log('props here!!', props);

    return (
        <div className="characterbox">
            <Card>
              <CardBody>
                <CardTitle><strong>{props.data.name}</strong></CardTitle>
                <CardSubtitle><strong>Birth Year:</strong>{props.data.birth_year}</CardSubtitle>
                <CardSubtitle><strong>Mass: </strong> {props.data.mass} stones</CardSubtitle>
                <CardSubtitle><strong>Height: </strong> {props.data.height} inches</CardSubtitle>
              </CardBody>
            </Card>
        </div>
    )
}

export default CharacterCard;