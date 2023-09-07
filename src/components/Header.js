import { HStack } from "@chakra-ui/react";
import Score from "./Score";
import Alert from "./Alert";

function Header(props) {
    return (
        <HStack justifyContent={"center"}>
            <Score score={props.score} color={"#F1C93B"} />
            <Score score={props.score} color={"white"} />
            <Alert header={"Reset progress"} 
            body={"Are you sure you want to restart the game ?"} 
            action={props.action} ></Alert>
        </HStack>
    );
}

export default Header;