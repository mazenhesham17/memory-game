import { Box, } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Tile.css';

const Tile = (props) => {
  return (
    <Box className={`card ${props.isFlipped ? 'flipped' : ''}`}
      onClick={() => {
        if (props.isFlipped)
          props.flip(props.row, props.col, !props.isFlipped)
      }}
      margin={"10px"} width={`${props.width}%`} >
      <Box className="card-inner">
        <Box className="card-front">
          {props.isFlipped ? (
            <></>
          ) : (
            props.isCorrect ? (
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