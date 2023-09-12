import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footnav from "@/components/footnav"

export default function Home() {

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
      <Center w={"100vw"} h={"100vh"} bgColor={"tomato"} flexDir={"column"} marginTop={"env(safe-area-inset-top)px"}>
        <Text>こんにちは</Text>
        <Text>アドレスバー非表示にしたい</Text>
      </Center>
      <Footnav />
    </>
  )
}
