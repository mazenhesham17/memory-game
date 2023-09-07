import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import Tile from "./Tile";


function Board(props) {
    const tiles = props.tiles;
    const m = tiles[0].length;
    const height = 90 / tiles.length, width = 90 / tiles[0].length;

    return (
        <VStack backgroundColor={"gray.200"} borderRadius={"20px"} >
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"} > Level {props.level} </Text>
            <Center>
                <Box width={"25rem"} height={"75vh"}>
                    {props.tiles.map((row, rowIndex) => {
                        return (
                            <HStack key={rowIndex} >
                                {row.map((ele, columnIndex) => {
                                    return (
                                        <Tile id={rowIndex * m + columnIndex} frontContent={ele} height={height} width={width} />
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