import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";

type Props = {
  text: string;
};

export const Page404 = (props: Props) => {
  const { text } = props;

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
          <Heading size="2xl" color="teal">
            404
          </Heading>
          <Heading size="md" color="gray.700">
            {`${text}が見つかりません`}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {`${text}は存在しません`}
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};
