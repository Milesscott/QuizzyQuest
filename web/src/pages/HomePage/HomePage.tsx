import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react'
import Navbar, { WithSubnavigation } from 'web/src/components/Navbar/Navbar'

import Footer, { ListHeader } from 'src/components/Footer/Footer'
export default function CallToActionWithAnnotation() {
  return (
    <>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </header>
      <WithSubnavigation></WithSubnavigation>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Navbar></Navbar>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Join the Quest for Knowledge with <br />
            <Text as={'span'} color={'purple.500'}>
              Quizzy Quest!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'green'}
              bg={'purple.500'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500',
              }}
            >
              Sign Up
            </Button>
            <Button
              colorScheme={'green'}
              bg={'purple.500'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500',
              }}
            >
              Sighn In
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Footer></Footer>
      <ListHeader></ListHeader>
    </>
  )
}
