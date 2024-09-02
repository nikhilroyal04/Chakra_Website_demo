import React from "react";
import {
  Box,
  Heading,
  Stack,
  Button,
  Image,
  useColorModeValue,
  Avatar,
  useBreakpointValue,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Badge,
  Grid,
  GridItem,
  Card,
  Input,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  FiMessageSquare,
  FiArrowRight,
  FiUserPlus,
  FiServer,
} from "react-icons/fi";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    role: "Developer",
    imageUrl: "https://source.unsplash.com/200x200/?person",
    email: "john.doe@example.com",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    role: "Designer",
    imageUrl: "https://source.unsplash.com/200x200/?woman",
    email: "jane.doe@example.com",
    location: "San Francisco",
  },
  {
    id: 3,
    name: "Mike Smith",
    age: 35,
    role: "Manager",
    imageUrl: "https://source.unsplash.com/200x200/?man",
    email: "mike.smith@example.com",
    location: "Chicago",
  },
  {
    id: 4,
    name: "Emily Johnson",
    age: 28,
    role: "Developer",
    imageUrl: "https://source.unsplash.com/200x200/?girl",
    email: "emily.johnson@example.com",
    location: "Los Angeles",
  },
  {
    id: 5,
    name: "Chris Brown",
    age: 32,
    role: "Designer",
    imageUrl: "https://source.unsplash.com/200x200/?boy",
    email: "chris.brown@example.com",
    location: "Seattle",
  },
  {
    id: 6,
    name: "Rachel Green",
    age: 40,
    role: "Manager",
    imageUrl: "https://source.unsplash.com/200x200/?woman",
    email: "rachel.green@example.com",
    location: "Miami",
  },
  {
    id: 7,
    name: "David Miller",
    age: 45,
    role: "Developer",
    imageUrl: "https://source.unsplash.com/200x200/?man",
    email: "david.miller@example.com",
    location: "Dallas",
  },
  {
    id: 8,
    name: "Rohan Verma",
    age: 45,
    role: "Developer",
    imageUrl: "https://source.unsplash.com/200x200/?woman",
    email: "rohan.verma@example.com",
    location: "Bangalore",
  },
];

const cities = [
  {
    id: 1,
    name: "New York",
    image: "https://source.unsplash.com/200x200/?newyork",
  },
  {
    id: 2,
    name: "San Francisco",
    image: "https://source.unsplash.com/200x200/?sanfrancisco",
  },
  {
    id: 3,
    name: "Chicago",
    image: "https://source.unsplash.com/200x200/?chicago",
  },
  {
    id: 4,
    name: "Los Angeles",
    image: "https://source.unsplash.com/200x200/?seattle",
  },
  {
    id: 5,
    name: "Seattle",
    image: "https://source.unsplash.com/200x200/?miami",
  },
  {
    id: 6,
    name: "Miami",
    image: "https://source.unsplash.com/200x200/?dallas",
  },
  {
    id: 7,
    name: "Dallas",
    image: "https://source.unsplash.com/200x200/?bangalore",
  },
  {
    id: 8,
    name: "Bangalore",
    image: "https://source.unsplash.com/200x200/?sanfrancisco",
  },
];

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Dashboard = () => {
  return (
    <Box display="flex" flex="1" transition="margin-left 0.3s ease">
      <Box flex="1">
        <Card variant="elevated">
          {/* // First Section */}
          <Stack direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <Text
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: useBreakpointValue({ base: "20%", md: "30%" }),
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "blue.400",
                      zIndex: -1,
                    }}
                  >
                    Freelance
                  </Text>
                  <br />{" "}
                  <Text color={"blue.400"} as={"span"}>
                    Design Projects
                  </Text>{" "}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  The project board is an exclusive resource for contract work.
                  It&apos;s perfect for freelancers, agencies, and moonlighters.
                </Text>
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <Button
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Create Project
                  </Button>
                  <Button rounded={"full"}>How It Works</Button>
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                alt={"Login Image"}
                objectFit={"cover"}
                src={
                  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=90"
                }
              />
            </Flex>
          </Stack>
        </Card>
        <Box py={1} />
        {/* //Second Section */}
        <Card>
          <Stack spacing={8}>
            {/* Card Example */}
            <Box px={40} py={10} alignItems="center">
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gap={5}
              >
                {data.map((item) => (
                  <GridItem
                    key={item.id}
                    colSpan={{ base: 1, sm: 1, md: 1, lg: 1 / 3, xl: 1 / 3 }}
                  >
                    <Box
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      p={4}
                      boxShadow="md"
                      width="100%"
                      height="400px"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "100%",
                          marginBottom: "12px",
                          height: "200px",
                        }}
                      />
                      <Text fontSize="lg" fontWeight="bold" mb={2}>
                        {item.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500" mb={2}>
                        Age: {item.age}
                      </Text>
                      <Badge colorScheme="blue">{item.role}</Badge>
                      <Box py={2} />
                      <Box>
                        <Button
                          leftIcon={<FiUserPlus />}
                          size="sm"
                          colorScheme="teal"
                          variant="outline"
                        >
                          Follow
                        </Button>
                        <Button
                          leftIcon={<FiMessageSquare />}
                          size="sm"
                          ml={3}
                          colorScheme="blue"
                          variant="outline"
                        >
                          Message
                        </Button>
                      </Box>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>
            <Divider />
            {/* Table Example */}
            <Box
              p="10"
              rounded="md"
              bg="white"
              boxShadow="lg"
              py={2}
              w="70vw"
              mx="auto"
              overflowX="auto"
            >
              <Heading size="lg" textAlign="center" mb="4">
                Employees Data
              </Heading>
              <Divider />
              <br />
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Age</Th>
                    <Th>Role</Th>
                    <Th>Location</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((row) => (
                    <Tr key={row.id}>
                      <Td>{row.name}</Td>
                      <Td>{row.email}</Td>
                      <Td>{row.age}</Td>
                      <Td>
                        <Flex alignItems="center">
                          {row.role === "Developer" && (
                            <Badge colorScheme="blue" mr="2">
                              {row.role}
                            </Badge>
                          )}
                          {row.role === "Designer" && (
                            <Badge colorScheme="green" mr="2">
                              {row.role}
                            </Badge>
                          )}
                          {row.role === "Manager" && (
                            <Badge colorScheme="purple" mr="2">
                              {row.role}
                            </Badge>
                          )}
                        </Flex>
                      </Td>
                      <Td>{row.location}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Stack>
          <Box py={5} />
        </Card>
        <Box py={1} />

        <Box variant="outline">
          <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            py={5}
            px={10}
          >
            <Container
              maxW="7xl"
              mx="auto"
              pt={5}
              px={{ base: 2, sm: 12, md: 17 }}
            >
              <chakra.h1
                textAlign="center"
                fontSize="4xl"
                py={10}
                fontWeight="bold"
              >
                Our company is expanding, you could be too.
              </chakra.h1>
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
              >
                <StatsCard
                  title="Users"
                  stat="5,000"
                  icon={<BsPerson size="3em" />}
                />
                <StatsCard
                  title="Servers"
                  stat="1,000"
                  icon={<FiServer size="3em" />}
                />
                <StatsCard
                  title="Datacenters"
                  stat="7"
                  icon={<GoLocation size="3em" />}
                />
              </SimpleGrid>
            </Container>
            <Box py={7} />
          </Box>
          <Box bg={useColorModeValue("gray.50", "gray.900")} py={5} px={10}>
            <Container maxW="6xl" mx="auto">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Input
                  h={20}
                  w={600}
                  fontSize={20}
                  placeholder="Enter city name ....."
                />
              </Box>{" "}
              <Stack mt={6} spacing={4}>
                <SimpleGrid
                  columns={{ sm: 2, md: 2, lg: 3, xl: 3 }}
                  spacing={4}
                  mx="auto"
                >
                  {cities.map((city) => (
                    <CityCard
                      key={city.id}
                      name={city.name}
                      image={city.image}
                    />
                  ))}
                </SimpleGrid>
              </Stack>
            </Container>
            <Box py={5} />
          </Box>
        </Box>
        <Box py={1} />
        {/* //Third Section */}
        <Card>
          <Box bg={useColorModeValue("gray.100", "gray.700")}>
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading>Our Clients Speak</Heading>
                <Text>We have been working with clients around the world</Text>
              </Stack>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 10, md: 4, lg: 10 }}
              >
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading>
                      Efficient Collaborating
                    </TestimonialHeading>
                    <TestimonialText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                    </TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={
                      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    }
                    name={"Jane Cooper"}
                    title={"CEO at ABC Corporation"}
                  />
                </Testimonial>
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading>Intuitive Design</TestimonialHeading>
                    <TestimonialText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                    </TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={
                      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    }
                    name={"Jane Cooper"}
                    title={"CEO at ABC Corporation"}
                  />
                </Testimonial>
                <Testimonial>
                  <TestimonialContent>
                    <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                    <TestimonialText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                    </TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={
                      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    }
                    name={"Jane Cooper"}
                    title={"CEO at ABC Corporation"}
                  />
                </Testimonial>
              </Stack>
            </Container>
          </Box>
        </Card>
        <Box py={1} />
        {/* //Fourth Section */}
        <Card>
          <Box>
            <Flex
              minH={"50vh"}
              align={"start"}
              alignItems={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Container maxW={"80vw"}>
                <Accordion allowMultiple width={"100%"}>
                  <AccordionItem>
                    <AccordionButton
                      display="flex"
                      justifyContent="space-between"
                      p={4}
                    >
                      <Text fontSize="md">What is Chakra UI?</Text>
                      <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.600">
                        Chakra UI is a simple and modular component library that
                        gives developers the building blocks they need to create
                        web applications.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={4}
                    >
                      <Text fontSize="md">What advantages to use?</Text>
                      <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.600">
                        Chakra UI offers a variety of advantages including ease
                        of use, accessibility, and customization options. It
                        also provides a comprehensive set of UI components and
                        is fully compatible with React.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={4}
                    >
                      <Text fontSize="md">How to start using Chakra UI?</Text>
                      <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text color="gray.600">
                        To get started with Chakra UI, you can install it via
                        npm or yarn, and then import the components you need in
                        your project. The Chakra UI documentation is also a
                        great resource for getting started and learning more
                        about the library.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Container>
            </Flex>
          </Box>
        </Card>
        <Box py={1} />
        {/* //end */}
      </Box>
    </Box>
  );
};

function CityCard({ name, image }) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      width="300px"
    >
      {" "}
      {/* Fix width to 300px */}
      <Image
        src={image}
        alt={name}
        borderRadius="md"
        mb={4}
        width="100%"
      />{" "}
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        {name}
      </Text>
      <Button
        variantColor="blue"
        mt={4}
        rightIcon={<FiArrowRight size={20} />}
        width="100%"
      >
        Check your Locality
      </Button>
    </Box>
  );
}

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Dashboard;
