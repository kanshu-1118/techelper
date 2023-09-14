import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'
import Category from './category'

interface propsType {
    title:string,
    where:string,
    category:[],
    monny:number,
    schedule:string,
    image:string,
    time:string,
}

const contents = (props : propsType) => {
    return (
        <Flex flexDirection={"column"} gap={"4px"} overflow={"hidden"} color={color.black} w={"154px"} height={"230px"}>
            <Image src={props.image} alt='' borderRadius={"5px"} />
            <Text fontSize={"10px"} fontWeight={"bold"}>{props.title}</Text>
            <Flex alignItems={"end"} justifyContent={"space-between"}>
                <Flex fontSize={"12px"} flexDir={"column"} color={color.darkgray}>
                    <Text>{props.schedule}</Text>
                    <Text>{props.time}</Text>
                </Flex>
                <Text fontSize={"12px"} fontWeight={"bold"}>¥1000/h</Text>
            </Flex>
            <Flex w="100%" gap={"4px"} height={"47px"} overflow={"hidden"} flexWrap={"wrap"}>
                <Category title={props.where} bgc={color.gray} borderColor={""} />
                {props.category.map((e,i) => {

                    return (
                        <Category key={i} title={e} bgc={color.base} borderColor={color.main} />
                    )
                })}
                {/* <Category title={"顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"副顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"顧問"} bgc={color.base} borderColor={color.main} />
                <Category title={"顧問"} bgc={color.base} borderColor={color.main} /> */}
            </Flex>
        </Flex>
    )
}

export default contents