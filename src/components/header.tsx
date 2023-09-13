import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'

const header = () => {
    return (
        <Flex position={"fixed"} gap={"20px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} color={color.black} top={"-1"} padding={"20px 0 16px 0"} w={"100vw"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
            <Text fontSize={"14px"}>お仕事一覧</Text>
            <Flex w={"calc(100vw - 64px)"} gap={"4px"} padding={"8px 12px"} flexDirection={"column"} borderRadius={"10px"} bgColor={color.gray}>
                <Text fontSize={"12px"} fontWeight={"bold"}>現在の絞り込み</Text>
                <Flex gap={"8px"}>
                    <Text fontSize={"10px"}>現在地付近</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default header