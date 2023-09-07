import { HStack, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

function Header(props) {
    return (
        <HStack justifyContent={"center"}>
            <Score score={props.score} color={"#F1C93B"} />
            <Score score={props.score} color={"white"} />
            <IconButton icon={<FontAwesomeIcon icon={faRotateRight} size="3x" color="#9DB2BF" ></FontAwesomeIcon>} backgroundColor={"transparent"} ></IconButton>
        </HStack>
    );
}

export default Header;