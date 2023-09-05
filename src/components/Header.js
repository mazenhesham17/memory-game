import { HStack, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";

function Header() {
    return (
        <HStack justifyContent={"center"}>
            <Score score={4650} color={"#F1C93B"} />
            <Score score={4650} color={"#DDE6ED"} />
            <IconButton icon={<FontAwesomeIcon icon={faRotateRight} size="3x" color="#9DB2BF" ></FontAwesomeIcon>} backgroundColor={"transparent"} ></IconButton>
        </HStack>
    );
}

export default Header;