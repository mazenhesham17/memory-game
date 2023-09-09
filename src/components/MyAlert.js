import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function MyAlert(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    return (
        <>
            <IconButton icon={<FontAwesomeIcon icon={faRotateRight} size="3x" color="#9DB2BF" />}
                backgroundColor={"transparent"} onClick={onOpen} />
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef}
                onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            {props.header}
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            {props.body}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => { props.action(); console.log("Yes"); onClose(); }} >
                                Yes
                            </Button>
                            <Button colorScheme="green" ml={3} onClick={onClose} >
                                No
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>

    )
}

export default MyAlert;