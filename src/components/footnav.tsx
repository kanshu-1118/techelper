import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'

const footnav = () => {
    return (
        <Flex position={"fixed"} bottom={"-1"} w={"100vw"} h={"81px"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"}>
                    <Image src='./images/chatlogo.svg' alt="" />
                    <Text fontSize={"8px"}>チャット</Text>
                </Center>
            </Link>
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"}>
                    <Image src='./images/homelogo.svg' alt="" />
                    <Text fontSize={"8px"}>ホーム</Text>
                </Center>
            </Link>
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"}>
                    <Image src='./images/mypagelogo.svg' alt="" />
                    <Text fontSize={"8px"}>マイページ</Text>
                </Center>
            </Link>
        </Flex>
    )
}

export default footnav