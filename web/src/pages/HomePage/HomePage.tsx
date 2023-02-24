import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box backgroundColor={'purple.600'}>
        {' '}
        <Stack align="center">
          <Image
            m={2}
            borderRadius="2xl"
            boxSize="500px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Stack>
        <Text noOfLines={[1, 2, 3]}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created.
        </Text>
        <Stack
          direction="column"
          spacing={2}
          align="center"
          justify={'space-evenly'}
        >
          <Button colorScheme="purple" variant="solid" size={'lg'}>
            Sign in
          </Button>
          <Button colorScheme="" variant="outline">
            Create account
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default HomePage
