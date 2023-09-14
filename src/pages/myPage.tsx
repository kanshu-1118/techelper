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
                <Text fontSize={"14px"} fontWeight={"bold"}>チャット</Text>
            </Flex>
            <Flex w={"calc(100vw - 68px)"} marginTop={"100px"} flexDir={"column"} gap={"32px"}>
                
                {member.ArrayList.map((e:any,i:number) => {

                    return(
                        <>
                            <Flex h={"50px"} alignItems={"center"}  gap={"12px"}>
                                <Image src="./images/assist.jpeg" alt="" width={"50px"} h="50px" borderRadius={"100px"} />
                                <Flex flexDirection={"column"} gap={"4px"}>
                                    <Text fontSize={"12px"}>{e.title}</Text>
                                    <Text fontSize={"10px"} color={color.darkgray}>それでは本日の予定は10:00からでよろしいで</Text>
                                </Flex>
                                <Flex flexDirection={"column"} marginLeft={"38px"} h={"100%"}>
                                    <Text fontSize={"10px"} color={color.darkgray}>12:00</Text>
                                </Flex>
                            </Flex>
                        </>
                    )
                })}
            </Flex>
            <Footnav />
        </Center>
    )
}

export default MyPage