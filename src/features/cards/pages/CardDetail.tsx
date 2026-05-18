import { useParams } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { useSkills } from "../../../hooks/useSkills";
import { Page404 } from "./errors/user/Page404";
import { Page500 } from "./errors/Page500";
import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Link,
  Spinner,
  Tag,
  TagLabel,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import type { IconType } from "react-icons";

type SnsLink = { label: string; url: string; icon: IconType };

export const CardDetail = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useUser(id);
  const {
    data: skills,
    isLoading: isSkillsLoading,
    error: skillsError,
  } = useSkills(user?.id.toString());

  if (isUserLoading || isSkillsLoading)
    return (
      <Center h="100vh">
        <Spinner size="lg" />
      </Center>
    );
  if (userError || skillsError) return <Page500 />;
  if (!user) return <Page404 />;

  const snsLinks = [
    { label: "GitHub", url: user.githubUrl, icon: FaGithub },
    { label: "Qiita", url: user.qiitaUrl, icon: SiQiita },
    { label: "X", url: user.xUrl, icon: FaXTwitter },
  ].filter((link): link is SnsLink => link.url !== null);

  return (
    <Box minH="100vh" bg="gray.100" py={{ base: 6, md: 16 }} px={4}>
      <Box
        maxW={{ base: "375px", md: "560px" }}
        mx="auto"
        bg="white"
        borderRadius="2xl"
        shadow="md"
        overflow="hidden"
      >
        <Box bg="teal" py={{ base: 6, md: 10 }} px={6}>
          <Heading
            size={{ base: "lg", md: "xl" }}
            textAlign="center"
            color="white"
          >
            {user.name}
          </Heading>
        </Box>

        <VStack spacing={0} align="stretch" divider={<Divider />}>
          <Box p={{ base: 5, md: 7 }}>
            <Heading size="sm" mb={3} color="gray.500">
              自己紹介
            </Heading>
            <Box
              fontSize={{ base: "sm", md: "md" }}
              color="gray.700"
              lineHeight="tall"
              dangerouslySetInnerHTML={{ __html: user.description }}
            />
          </Box>

          {skills && skills.length > 0 && (
            <Box p={{ base: 5, md: 7 }}>
              <Heading size="sm" mb={3} color="gray.500">
                好きな技術
              </Heading>
              <Wrap spacing={2}>
                {skills.map((skill) => (
                  <WrapItem key={skill.id}>
                    <Tag colorScheme="teal" size="md" borderRadius="full">
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          )}

          {snsLinks.length > 0 && (
            <Box p={{ base: 5, md: 7 }}>
              <HStack justify="center" spacing={8}>
                {snsLinks.map(({ label, url, icon }) => (
                  <Link key={label} href={url} isExternal aria-label={label}>
                    <Icon
                      as={icon}
                      boxSize={{ base: 8, md: 10 }}
                      color="teal.700"
                      _hover={{ color: "blue.500" }}
                      transition="color 0.2s"
                    />
                  </Link>
                ))}
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};
