import React from 'react'
import { Center, Heading,Image,Text } from '@chakra-ui/react'
import lightBulb from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <>
    <Image src={lightBulb} alt ='lightbulb' width={100} marginBottom='1rem' />
    <Heading color='white' marginBottom='1rem'>
        AI Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign='Center'>
        Paste your text and we will extract the keywords for you!
    </Text>
    </>
  )
}

export default Header