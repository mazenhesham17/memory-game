import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../styles/Tile.css';

const Tile = (props) => {
  const [isFlipped, setFlipped] = useState(true);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };
  return (
    <Box className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard} margin={"10px"}
      width={`${props.width}%`} >
      <Box className="card-inner">
        <Box className="card-front">{isFlipped ? '' : props.frontContent}</Box>
        <Box className="card-back"></Box>
      </Box>
    </Box>
  );
};

export default Tile;
