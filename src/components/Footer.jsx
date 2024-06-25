import { Box, Image,Text,Flex } from "@chakra-ui/react";
import openAILogo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={openAILogo} alt='openailogo' marginRight='1rem' />
            <Text>
                Powered by open AI
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer