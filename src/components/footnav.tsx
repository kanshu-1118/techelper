import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'

const Footnav = () => {

    const [chat,setChat] = useState(`chatlogo.svg`)
    const [home,setHome] = useState(`homelogo.svg`)
    const [mypage,setMypage] = useState(`mypagelogo.svg`)

    const [ob,setOb] = useState("home")


    const chatSelect = () => {
        setChat(`chatlogoSelect.svg`)
        setHome(`homelogo.svg`)
        setMypage(`mypagelogo.svg`)
    }

    const homeSelect = () => {
        setChat(`chatlogo.svg`)
        setHome(`homelogoSelect.svg`)
        setMypage(`mypagelogo.svg`)
    }

    const mypageSelect = () => {
        setChat(`chatlogo.svg`)
        setHome(`homelogo.svg`)
        setMypage(`mypagelogoSelect.svg`)
    }

    return (
        <Flex position={"fixed"} bottom={"-1"} color={color.black} w={"100vw"} h={"81px"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"} onClick={(e) => {chatSelect()}}>
                    <Image src={`./images/${chat}`} alt="" />
                    <Text fontSize={"8px"}>チャット</Text>
                </Center>
            </Link>
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"} onClick={() => {homeSelect()}}>
                    <Image src={`./images/${home}`} alt="" />
                    <Text fontSize={"8px"}>ホーム</Text>
                </Center>
            </Link>
            <Link href={"#"} passHref>
                <Center flexDir={"column"} w={"calc(100vw/3)"} paddingTop={"16px"} gap={"3px"} onClick={() => {mypageSelect()}}>
                    <Image src={`./images/${mypage}`} alt="" />
                    <Text fontSize={"8px"}>マイページ</Text>
                </Center>
            </Link>
        </Flex>
    )
}

export default Footnav