import { HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
function Score(props) {
    return (
        <HStack backgroundColor={"gray.200"} borderRadius={"20px"} justifyContent={"center"}
            margin={"10px"} padding={"10px"} width={"9rem"}  >
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"} >
                {props.score}
            </Text>
            <FontAwesomeIcon icon={faTrophy} size="2x" color={`${props.color}`} />
        </HStack>
    );
}

export default Score;