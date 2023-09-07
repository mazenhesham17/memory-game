import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { generateCustomKey } from "../logic/utilities";
import Tile from "./Tile";


function Board(props) {
    const tiles = props.tiles;
    const m = tiles[0].length;
    const height = 90 / tiles.length, width = 90 / tiles[0].length;

    return (
        <VStack backgroundColor={"gray.200"} borderRadius={"20px"} >
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"} > Level {props.level} </Text>
            <Center>
                <Box width={"22rem"} >
                    {props.tiles.map((row) => {
                        return (
                            <HStack key={generateCustomKey(row)} >
                                {row.map((ele) => {
                                    return (
                                        <Tile key={generateCustomKey(ele)} frontContent={ele} height={height} width={width} />
                                    )
                                })}
                            </HStack>
                        )
                    })}
                </Box>
            </Center>
        </VStack>
    );
}

export default Board;