import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'
import Category from './category'

const Modal = () => {

    const [cms,setCms] = useState([])

    useEffect(() => {
        const fecthello = async () => {
            const responce = await fetch(`./api/cms`)
            const data = await responce.json()
            setCms(data.cms)
        }
        fecthello()
    },[])
    


    return (
        <Flex position={"absolute"} bgColor={color.base} gap={"48px"} bottom={"0"} zIndex={"100"} flexDirection={"column"}>
            <Flex w={"100vw"} paddingLeft={"24px"} gap={"125px"} height={"56px"} alignItems={"center"} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"}>
                <Image src='./images/closelogo.svg' alt='' w={"24px"} />
                <Text fontSize={"12px"} fontWeight={"bold"}>絞り込み検索</Text>
            </Flex>
            <Flex flexDir={"column"} fontWeight={"bold"} alignItems={"center"} gap={"24px"}>
                <Flex flexDirection={"column"} >
                    <Flex>
                        <Text fontWeight={"bold"}>給料</Text>
                        <Text>0~10,00</Text>
                    </Flex>
                    <Flex></Flex>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>勤務地</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"10px"}>大阪府</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>労働時間</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"10px"}>10:00 ~ 14:00</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>期間</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"10px"}>~2ヶ月</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>業務内容</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        {}
                    </Center>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Modal