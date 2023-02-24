import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Text noOfLines={[1, 2, 3]}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>

      <Button colorScheme="blue" size="lg">
        Button
      </Button>
      <Button colorScheme="blue">Button</Button>
    </>
  )
}

export default HomePage
