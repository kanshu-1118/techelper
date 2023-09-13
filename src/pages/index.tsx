import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footnav from "@/components/footnav"
import Header from "@/components/header"
import { color } from "@/utils/colortypeTheme"

export default function Home() {

  const [cms,setCms] = useState([])
  const [dropdown,setDropdown] = useState("block")
  const [dropOpacity,setDropOpacity] = useState(0)
  const [dropHeight,setDropHeight] = useState("52px")
  const [dropBottom,setDropBottom] = useState("50%")
  const [openOb,setOpenOb] = useState("open")

  useEffect(() => {
    const fecthello = async () => {
      const responce = await fetch(`./api/cms`)
      const data = await responce.json()
      setCms(data.cms.contents)
    }
    fecthello()
  },[])

  console.log(cms);
  
  const click = () => {
    setDropdown("none")
    setDropOpacity(1)
    setDropHeight("216px")
    setDropBottom("24px")
    setOpenOb("close")
  }
  const close = () => {
    setDropdown("Block")
    setDropOpacity(0)
    setDropHeight("52px")
    setDropBottom("50%")
    setOpenOb("open")
  }

  return (
    <>
    <Header />
      <Center w={"100vw"} h={"100vh"} bgColor={"tomato"} flexDir={"column"}>
        <Text>こんにちは</Text>
        <Text>アドレスバー非表示にしたい</Text>
        <Center w={"52px"} overflow={"hidden"} position={"fixed"} right={"20px"} bottom={"100px"} h={dropHeight} padding={"24px 0"} justifyContent={openOb == "open" ? "center" : "space-between"} transition={".3s ease-in-out"} flexDirection={"column"} borderRadius={"50px"} bgColor={color.base} boxShadow={"1px 1px 3px rgba(0,0,0,0.25)"}
          onMouseDown={() => click()}>
          {openOb == "close"
          &&
          <Center w="24px" transition={"1s ease"} >
            <Image src="./images/bellogo.svg" alt="" />
          </Center>
          }
          {openOb == "close"
          &&
          <Center w="24px" transition={"1s ease"} >
            <Image src="./images/Gear.svg" alt="" />
          </Center>
          }
          {openOb == "close"
          &&
          <Center w="24px" transition={"1s ease"} >
            <Image src="./images/infologo.svg" alt="" />
          </Center>
          }
          {openOb == "open"
          ?
          <Center flexDirection={"column"} gap={"4px"}>
            <Box w="24px" h={"3px"} borderRadius={"10px"} bgColor={color.black} />
            <Box w="24px" h={"3px"} borderRadius={"10px"} position={"relative"} bgColor={color.black} />
            <Box w="24px" h={"3px"} borderRadius={"10px"} bgColor={color.black} />
          </Center>
          :
          <Center flexDirection={"column"} gap={"4px"} onClick={() => close()}>
            <Image src="./images/closelogo.svg" alt="" />
          </Center>
          }
        </Center>
      </Center>
      <Footnav />
    </>
  )
}
