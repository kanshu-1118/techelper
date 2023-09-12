import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const footnav = () => {
    return (
        <Flex position={"fixed"} bottom={"0"} w={"100vw"} h={"100px"} zIndex={"10"}>
            <Text>こんにちは</Text>
        </Flex>
    )
}

export default footnav