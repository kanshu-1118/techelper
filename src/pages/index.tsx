import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footnav from "@/components/footnav"
import Header from "@/components/header"
import { color } from "@/utils/colortypeTheme"
import Contents from "@/components/contents"

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
    <Box>
    <Header />
      <Flex alignItems={"center"} w={"100vw"} h={"100vh"} bgColor={color.base} flexDir={"column"}>
        <Flex w={"calc(100vw - 64px)"} flexDir={"column"} justifyContent={"space-between"} marginTop={"130px"}>
        <Flex margin={"32px 0"} justifyContent={"end"}>
          <Text padding={"2px"} borderBottom={"1.5px solid #000"}>並び替え ↓</Text>
        </Flex>
        <Flex w={"calc(100vw - 64px)"} justifyContent={"space-between"} gap={"18px"} flexWrap={"wrap"}>
          {cms.map((e,i) => {
            return(
            <Link 
              href={{
                pathname:"/contentsPage",
                query:{i}
              }}
              // passHref
              key={i}
            >
              <Contents key={i} title={e.title} where={e.where[0]} category={e.category} monny={e.monny} schedule={e.schedule} image={e.image.url} time={e.time} />
            </Link>
            )
          })}
        </Flex>
        </Flex>
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
      </Flex>
    <Footnav />
    </Box>

  )
}
