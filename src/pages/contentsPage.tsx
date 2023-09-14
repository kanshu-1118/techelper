import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import Footnav from "@/components/footnav"
import Header from "@/components/header"
import { color } from "@/utils/colortypeTheme"
import Contents from "@/components/contents"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const ContentsPage = () => {

    const router = useRouter()

    const [cms,setCms] = useState([])

    useEffect(() => {
        const fecthello = async () => {
            const responce = await fetch(`./api/cms`)
            const data = await responce.json()
            setCms(data.cms.contents)
        }
        fecthello()
    },[])

    console.log(cms);
    

    return (
        <Box>
            {cms.map((e : any,i :number) => {
                {if (i == router.query.i as unknown as number) {
                    return(
                        <Center key={i}>
                            <Flex position={"fixed"} gap={"110px"} alignItems={"center"} color={color.black} top={"-1"} padding={"20px 0 16px 24px"} w={"100vw"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
                                <Image src="./images/closelogo.svg" alt="" w={"20px"}  />
                                <Text fontSize={"14px"} fontWeight={"bold"}>{e.title}</Text>
                            </Flex>
                        </Center>
                    )
                }}
            })}
            <Footnav />
        </Box>
    )
}

export default ContentsPage