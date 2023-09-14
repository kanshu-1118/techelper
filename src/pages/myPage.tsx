import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footnav from "@/components/footnav"
import Header from "@/components/header"
import { color } from "@/utils/colortypeTheme"
import Contents from "@/components/contents"
import member from "@/lib/member"

const MyPage = () => {
    return (
        <Center>
            <Flex position={"fixed"} gap={"20px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} color={color.black} top={"-1"} padding={"20px 0 16px 0"} w={"100vw"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
                <Text fontSize={"14px"} fontWeight={"bold"}>マイページ</Text>
            </Flex>
            <Image src="./images/mypage.jpg" alt="" w={"90vw"} marginTop={"100px"} />
            <Footnav />
        </Center>
    )
}

export default MyPage