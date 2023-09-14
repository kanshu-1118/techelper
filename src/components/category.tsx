import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'
import { motion } from 'framer-motion'

interface propsType {
    title:string,
    bgc:string,
    borderColor:string,
}

const category = (props : propsType) => {
    return (
        <Center as={motion.div} bgColor={props.bgc} borderRadius={"2px"} border={`0.5px solid ${props.borderColor}`} padding={"2px 12px"}>
            <Text fontSize={"10px"} >{props.title}</Text>
        </Center>
    )
}

export default category