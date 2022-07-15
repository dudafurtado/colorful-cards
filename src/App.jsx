import { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components';
import { Box, Container, Flex, Heading, Text } from 'styled-minimal';

function App() {
  const [purpleCard, setPurpleCard] = useState(false);
  const [pinkCard, setPinkCard] = useState(false);
  const [greenCard, setGreenCard] = useState(false);

  const theme = {
    button: {
      borderRadius: {
        xs: '2px',
        sm: '3px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      },
    },
    space: [0, 4, 8, 12, 16, 24, 32, 64, 128],
    breakpoints: {
      xs: 0,
      ix: 400,
      md: 768,
      lg: 1024,
      xl: 1360,
      xxl: 1920,
    },
    fontSizes: [12, 14, 16, 18, 22, 26, 32, 48],
  };

  useEffect(() => {
    setTimeout(() => {
      setGreenCard(true);
    }, 1500);

    setTimeout(() => {
      setPurpleCard(true);
    }, 2500);

    setTimeout(() => {
      setPinkCard(true);
    }, 3500);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container 
      maxWidth='100vw'
      maxHeight='100vh'
      p={100}
      >
        <Flex flexDirection='column'>
          <Heading
          mb={40}
          >
            Cards and Timer
          </Heading>
          <Box
            p={4}
            width={400}
            height={60}
            mb={25}
            bg={purpleCard ? 'purple' : ''}
            border={purpleCard ? '' : '3px solid'}
            borderColor={purpleCard ? '' : 'purple'}
          >
            <Flex alignItems='center' justifyContent='center'>
              {purpleCard ? 
              <Text fontSize={25}>2.5 seconds</Text> : 
              <Box 
                width={22} 
                height={22} 
                opacity={0.9} 
                bg='purple' 
                borderRadius={50} 
              /> 
              }
            </Flex>
          </Box>
          <Box
            p={4}
            width={400}
            height={60}
            mb={25}
            bg={pinkCard ? 'pink' : ''}
            border={pinkCard ? '' : '3px solid'}
            borderColor={pinkCard ? '' : 'pink'}
          >
            <Flex alignItems='center' justifyContent='center'>
              {pinkCard ? 
              <Text fontSize={25}>3.5 seconds</Text> : 
              <Box 
                width={22} 
                height={22} 
                opacity={0.9} 
                bg='pink' 
                borderRadius={50}
              />
              }
            </Flex>
          </Box>
          <Box
            p={4}
            width={400}
            height={60}
            mb={25}
            bg={greenCard ? 'green' : ''}
            border={greenCard ? '' : '3px solid'}
            borderColor={greenCard ? '' : 'green'}
          >
            <Flex alignItems='center' justifyContent='center'>
              {greenCard ? 
              <Text fontSize={25}>1.5 seconds</Text> : 
              <Box 
                width={22} 
                height={22} 
                opacity={0.9} 
                bg='green' 
                borderRadius={50}
              />
              }
            </Flex>
          </Box>
        </Flex>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
