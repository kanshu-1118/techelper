import { Box,Flex,Image,Center,Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footnav from "@/components/footnav"
import { color } from "@/utils/colortypeTheme"

export default function Home() {

  const [cms,setCms] = useState([])
  const [dropdown,setDropdown] = useState("block")
  const [dropOpacity,setDropOpacity] = useState(0)

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
  }

  return (
    <>
      <Center w={"100vw"} h={"100vh"} bgColor={"tomato"} flexDir={"column"} marginTop={"env(safe-area-inset-top)px"}>
        <Text>こんにちは</Text>
        <Text>アドレスバー非表示にしたい</Text>
        <Center w={"52px"} h={"52px"} flexDirection={"column"} gap={"4px"} borderRadius={"100%"} bgColor={color.base} boxShadow={"1px 1px 3px rgba(0,0,0,0.25)"} _before={{content:`""`,display:"block",transition:"1s ease",opacity:dropOpacity,width:`24px`,height:`3px`,top:`50%`,left:`50%`,borderRadius:"10px",transform:`translate(0%,120%) rotate(45deg)`,bgColor:color.black}} _after={{content:`""`,display:"block",transition:"1s ease",opacity:dropOpacity,width:`24px`,height:`3px`,top:`50%`,left:`50%`,borderRadius:"10px",transform:`translate(0%,-100%) rotate(-45deg)`,bgColor:color.black}}
          onMouseDown={() => click()}>
          <Box w="24px" h={"3px"} borderRadius={"10px"} display={dropdown} bgColor={color.black} />
          <Box w="24px" h={"3px"} borderRadius={"10px"} display={dropdown} position={"relative"} bgColor={color.black} />
          <Box w="24px" h={"3px"} borderRadius={"10px"} display={dropdown} bgColor={color.black} />
        </Center>
      </Center>
      <Footnav />
    </>
  )
}
