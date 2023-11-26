import { useState } from "react";
import { Box, Button, Input, Image, Flex, Avatar, VStack, Text, Heading, Stack, FormControl, FormLabel, useColorModeValue, Grid, Card, Icon } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";

import logo from "../../assets/images/m.png";
import avatar1 from "../../assets/avatars/1.png";
import avatar2 from "../../assets/avatars/2.png";
import avatar3 from "../../assets/avatars/3.png";
import avatar4 from "../../assets/avatars/4.png";
import avatar5 from "../../assets/avatars/5.png";
import avatar6 from "../../assets/avatars/6.png";
import avatar7 from "../../assets/avatars/7.png";
import avatar8 from "../../assets/avatars/8.png";
import avatar9 from "../../assets/avatars/9.png";

const Profile = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(avatar1);
    const [userName, setUserName] = useState("Nombre de Usuario");
    const [userPhone, setUserPhone] = useState("123-456-7890");
    const [userEmail, setUserEmail] = useState("usuario@example.com");

    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

    const handleLogout = () => {
        // Lógica para manejar el logout
        console.log("Usuario ha cerrado sesión");
    };

    return (
        <>
            <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="rgba(203, 181, 123, 0.3)" color={useColorModeValue("gray.600", "white")}>
                <Flex align="center" mr={5}>
                    <Image src={logo} alt="Logo" boxSize="50px" />
                </Flex>

                <Box flexGrow={1} textAlign="right">
                    <Button onClick={handleLogout} variant="ghost">
                        <Icon as={FaSignOutAlt} w={7} h={7} />
                    </Button>
                    <Avatar src={selectedAvatar} size="md" />
                </Box>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} h="calc(100vh - headerHeight)" overflow="hidden">
                <Card as="aside" w="23%" p={5} overflowY="auto">
                    <Heading as="h3" size="lg" paddingBottom={5}>
                        Mi cuenta
                    </Heading>
                    <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                        <VStack>
                            <Card p="10%" mb="2vh" w="20vw" alignItems="center">
                                <Avatar size="2xl" src={selectedAvatar} />
                                <Text>{userName}</Text>
                            </Card>
                            <Heading fontSize="1.1em" mb="2vh">
                                Elige un avatar
                            </Heading>
                            <Grid templateColumns="repeat(3, 1fr)" gap={4} w="15vw">
                                {avatars.map((avatar, index) => (
                                    <Avatar
                                        key={index}
                                        src={avatar}
                                        size="ml"
                                        cursor="pointer"
                                        border={selectedAvatar === avatar ? "3px solid #8CC134" : ""}
                                        _hover={{
                                            border: "3px solid #88C326",
                                        }}
                                        onClick={() => setSelectedAvatar(avatar)}
                                    />
                                ))}
                            </Grid>
                        </VStack>
                    </Stack>
                </Card>

                <Card w="40%">
                    <Stack as="main" flex={1} spacing={3} p={5} overflowY="auto" w="100%">
                        <FormControl mt="4vh">
                            <FormLabel>Nombre</FormLabel>
                            <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Teléfono</FormLabel>
                            <Input value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </FormControl>
                        <Button mt={4} onClick={() => console.log("Editar Perfil")} bgColor="#CBB57B" color="white" _hover={{ bgColor: "#AB9867" }}>
                            Editar Perfil
                        </Button>
                    </Stack>
                </Card>
            </Flex>
        </>
    );
};

export default Profile;
