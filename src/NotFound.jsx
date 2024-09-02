import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Box>
      <Heading as="h2" mb={4}>404 Not Found</Heading>
      <Text>The page you're looking for doesn't exist.</Text>
    </Box>
  );
}

export default NotFound;
