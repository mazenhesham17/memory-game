import { Box, Text } from "@chakra-ui/react";

function Bar(props) {
    const percentage = Math.abs(props.moves / props.totMoves * 100);
    return (
        <Box backgroundColor={"#f0f0f0"} borderRadius={"20px"} margin={"10px"} width={"20rem"}  >
            <Box backgroundColor={"#4caf50"} width={`${percentage}%`} borderRadius={"20px"} >
                <Text fontSize={"2xl"} padding={"5px"} color={"#fff"} >
                    {props.moves} {props.moves === 1 ? "move" : "moves"} left
                </Text>
            </Box>

        </Box>
    );
}

export default Bar;