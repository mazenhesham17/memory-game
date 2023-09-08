import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Tile.css';

const Tile = (props) => {
  const [isFlipped, setFlipped] = useState(true);
  const [isCorrect, setCorrect] = useState(false);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const toggle = () => {
    setCorrect(!isCorrect) ;
  }
  return (
    <Box className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard} margin={"10px"}
      width={`${props.width}%`} >
      <Box className="card-inner">
        <Box className="card-front">
          {isFlipped ? (
            <></>
          ) : (
            isCorrect ? (
              <FontAwesomeIcon icon={faCircleCheck} color='green' size='2x' />
            ) : (
              <p>{props.frontContent}</p>
            )
          )}
        </Box>
        <Box className="card-back"></Box>
      </Box>
    </Box>
  );
};

export default Tile;