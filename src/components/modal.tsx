import { Flex, Text, Center, Image, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'
import Category from './category'
import category from '@/lib/category'

interface propsType  {
    bottom:string,
    closefun:any,
}

const Modal = (props : propsType) => {

    const [cms,setCms] = useState([])
    const [value,setValue] = useState()

    useEffect(() => {
        const fecthello = async () => {
            const responce = await fetch(`./api/cms`)
            const data = await responce.json()
            setCms(data.cms)
        }
        fecthello()
    },[])

    
    

    return (
        <Flex position={"fixed"} bgColor={color.base} className='modal' gap={"48px"} height={"100vh"} transition={"0.3s ease"} bottom={props.bottom} zIndex={"100"} flexDirection={"column"}>
            <Flex w={"100vw"} paddingLeft={"24px"} gap={"125px"} height={"56px"} alignItems={"center"} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"}>
                <Image src='./images/closelogo.svg' alt='' w={"24px"} onClick={props.closefun} />
                <Text fontSize={"12px"} fontWeight={"bold"}>絞り込み検索</Text>
            </Flex>
            <Flex flexDir={"column"} fontWeight={"bold"} alignItems={"center"} gap={"24px"}>
                <Flex flexDirection={"column"} w={"calc(100vw - 68px)"} gap={"12px"} >
                    <Flex w={"calc(100vw - 68px)"} justifyContent={"space-between"}>
                        <Text fontWeight={"bold"}>給料</Text>
                        <Text>{value}</Text>
                    </Flex>
                    <Flex as={"input"} type="range" id="slider01" min="0" max="100" step="1" onChange={(event:any) => setValue(event.target.value)} value={value} w={"calc(100vw - 68px)"} />
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>勤務地</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"12px"}>大阪府</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>労働時間</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"12px"}>10:00 ~ 14:00</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>期間</Text>
                    <Center w={"calc(100vw - 68px)"} paddingRight={"30px"} justifyContent={"end"} borderRadius={"6px"} h={"30px"} border={`2px solid ${color.main}`}>
                        <Text fontSize={"12px"}>~2ヶ月</Text>
                    </Center>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                    <Text>業務内容</Text>
                    <Flex w={"calc(100vw - 68px)"} gap={"8px"} flexWrap={"wrap"}>
                        {category.ArrayList.map((e:any,i:number) => {
                            return(
                                <Category key={i} title={e.title} bgc={color.base} borderColor={color.main} />
                            )
                        })}
                    </Flex>
                </Flex>
                {/* <Flex flexDirection={"column"} w={"calc(100vw - 68px)"} gap={"12px"}>
                    <Text>現在地付近を表示</Text>
                    <Center w={"46px"} h={"24px"} borderRadius={"50px"} bgColor={color.main}>

                    </Center>
                </Flex> */}
                <Flex as={"button"} marginTop={"20px"} padding={"8px 27px"} onClick={props.closefun} color={color.white} borderRadius={"10px"} alignItems={"end"} gap={"8px"} bgColor={color.main} >
                    <Text fontSize={"10px"}>現在の絞り込み件数</Text>
                    <Text fontSize={"14px"}>1,000件</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Modal