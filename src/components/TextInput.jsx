import React from 'react'
import { useState } from 'react'
import { Textarea,Button, useToast } from '@chakra-ui/react'


const TextInput = () => {

    const [text,setText] = useState('')

    const toast = useToast();

    const submitText =() => {

        if(text===''){
            toast({
                title: 'Text Field is Empty',
                description: 'Please enter some text to extract keywords',
                status:'error',
                duration:5000,
                isClosable:false,
            });
        } else{
            console.log(text);
        }
        console.log(text);
    };


  return (
    <>
    <Textarea bg='blue.400' color='white' padding={4} marginTop={6} height={200} value={text} onChange={ (e) => setText(e.target.value)} />
        <Button bg='blue.500' color='white' marginTop={4} width='100%' _hover={{bg:'blue.700'}} onClick={submitText}>
            Extract Keywords
        </Button>


    </>
  )
}

export default TextInput