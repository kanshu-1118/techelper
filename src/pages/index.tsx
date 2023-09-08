import { Box,Flex,Image,Center } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"

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
      <Flex>こんにちは</Flex>
    </>
  )
}
