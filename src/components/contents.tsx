import { Flex, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { color } from '@/utils/colortypeTheme'

const contents = () => {
    return (
        <Flex borderRadius={"10px"} color={color.base} boxShadow={"1px 1px 3px rgba(0,0,0,0.25)"} w={"calc(100vw - 64px)"} height={"200px"}>
            
        </Flex>
    )
}

export default contents