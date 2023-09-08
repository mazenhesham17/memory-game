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
                    {props.tiles.map((row, rowIndex) => {
                        return (
                            <HStack key={generateCustomKey(row)} >
                                {row.map((ele, colIndex) => {
                                    return (
                                        <Tile key={generateCustomKey(ele)}
                                            isCorrect={props.correct[rowIndex][colIndex]}
                                            isFlipped={props.flip[rowIndex][colIndex]}
                                            flip={props.setFlip}
                                            col={colIndex}
                                            row={rowIndex}
                                            frontContent={ele}
                                            height={height} width={width} />
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