import { Center, Progress, ProgressLabel } from "@chakra-ui/react";

function Bar(props) {
    const percentage = Math.abs(props.moves / props.totMoves * 100);
    return (
        <Center>
            <Progress background={"gray.200"} value={percentage} colorScheme={`${ percentage < 25 ? "red" : "green" }`} width={"22rem"} height={"3rem"} margin={"5px"} borderRadius={"20px"}>
                <ProgressLabel fontSize={"2rem"}> {props.moves} {props.moves <= 1 ? "move" : "moves"} left </ProgressLabel>
            </Progress>
        </Center>
    );
}

export default Bar;