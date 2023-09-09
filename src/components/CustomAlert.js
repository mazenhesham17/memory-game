import { Alert, AlertDescription, AlertTitle } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomAlert(props) {
    return (<Alert status={props.status} >
        <AlertTitle>
            {props.title}
            <FontAwesomeIcon icon={props.icon} color={ props.status === "error" ? "red" : "green" } />
        </AlertTitle>
        <AlertDescription>
            {props.message}
        </AlertDescription>
    </Alert>);
}

export default CustomAlert;