import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import Footnav from "@/components/footnav"
import Header from "@/components/header"
import { color } from "@/utils/colortypeTheme"
import Contents from "@/components/contents"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const ContentsPage : NextPage = () => {

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
        <>
            <Header />
            {cms.map((e : any,i :number) => {
                {if (i == router.query.i as unknown as number) {
                    return(
                        <Flex key={i}>
                            <Text>{e.title}</Text>
                        </Flex>
                    )
                }}
            })}
            <Footnav />
        </>
    )
}

export default ContentsPage