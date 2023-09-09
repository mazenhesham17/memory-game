import { HStack } from "@chakra-ui/react";
import Score from "./Score";
import MyAlert from "./MyAlert";

function Header(props) {
    return (
        <HStack justifyContent={"center"}>
            <Score score={props.highScore} color={"#F1C93B"} />
            <Score score={props.score} color={"white"} />
            <MyAlert header={"Reset progress"}
                body={"Are you sure you want to restart the game ?"}
                action={props.action} />
        </HStack>
    );
}

export default Header;