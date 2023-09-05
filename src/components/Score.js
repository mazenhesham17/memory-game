import { HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
function Score(props){
    return(
        <HStack margin={"10px"} padding={"10px"} backgroundColor={"#DDE6ED"} width={"8rem"} borderRadius={"20px"} justifyContent={"center"}>
            <Text fontSize={"2rem"} >{props.score}</Text>
            <FontAwesomeIcon icon={faTrophy} size="2x" color={`${props.color}`}/>
        </HStack>
    );
}

export default Score ;