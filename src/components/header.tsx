import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'

const header = () => {
    return (
        <Flex position={"fixed"} top={"-1"} w={"100vw"} h={"110px"} zIndex={"10"} bgColor={color.base} boxShadow={"0px 0px 4px rgba(0,0,0,0.25)"} >
            
        </Flex>
    )
}

export default header