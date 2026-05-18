import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";

export const Page500 = () => {
  return (
    <Center minH="100vh" bg="gray.100">
      <Box
        bg="white"
        borderRadius="2xl"
        shadow="md"
        p={10}
        textAlign="center"
        maxW="375px"
        w="full"
        mx={4}
      >
        <VStack spacing={3}>
          <Heading size="2xl" color="red.400">
            500
          </Heading>
          <Heading size="md" color="gray.700">
            エラーが発生しました
          </Heading>
          <Text fontSize="sm" color="gray.500">
            しばらく時間をおいて再度お試しください
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};
