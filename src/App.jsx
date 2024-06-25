
import React, { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputText from './components/InputText';
import Groq from 'groq-sdk';
import KeywordsModal from './components/KeywordsModal';

const App = () => {
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsopen] =useState(false);

  const extractKeywords = async (text) => {
    // setLoading(true);
    setLoading(true);
    setIsopen(true);

    const groq = new Groq({
      apiKey: import.meta.env.VITE_GROQ_API,
      dangerouslyAllowBrowser: true, // Allow browser-like environment
    });

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: 'Extract Keywords from this text. Make the first letter of each word Uppercase and separate with commas or bullet points \n\n' + text }],
        model: 'llama3-8b-8192',
      });

      const data = chatCompletion.choices[0]?.message?.content || '';
      console.log(data);
      setKey(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const closeModal =()=>{
    setIsopen(false);

  }

  return (
    <Box bg='blue.600' color='white' height='100vh' padding={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <InputText extractKeywords={extractKeywords} />
        <Footer />
        {/* {loading && <Text>Loading...</Text>}
        {key && (
          <Box p={4} borderWidth="1px" borderRadius="lg" mt={4}>
            <Text>{key}</Text>
          </Box>
        )} */}
      </Container>
      <KeywordsModal  keywords={key} loading={loading} isOpen={isOpen} closeModal={closeModal}/>
    </Box>
  );
};

export default App;

