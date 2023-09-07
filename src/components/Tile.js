import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";

function Tile(props) {
    const [change,setChange] = useState(0) ;
    console.log(props) ;
    const go = ()=>{
        setChange(change+1) ;
    }
    return (
        <Box onClick={ go } borderRadius={"20px"} margin={"10px"} 
            backgroundColor={"white"}
            height={`${props.height}%`} width={`${props.width}%`} fontSize={"2xl"} fontWeight={"bold"} >
            <Center > 
                { change & 1 ?  props.char : "F" }
            </Center>

        </Box>
    );
}

export default Tile;