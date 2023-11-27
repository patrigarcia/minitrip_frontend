import React from "react";
import { Flex, Image, IconButton, Text, HStack } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            paddingX="1.5rem"
            paddingY="0.5rem"
            bg="white"
            color="gray.600"
            borderBottomWidth="1px"
            borderColor="gray.100"
            h="12vh"
            bgColor="#CBB57B"
        >
            <Flex align="center">
                <Image src="src/assets/images/logo_w.png" alt="Logo" boxSize="60px" ml="2vw" />
            </Flex>

            <HStack color="white" fontFamily="Raleway" as="b" fontSize="1.1em" spacing={20}>
                <Link to="/">
                    <Text>HOME</Text>
                </Link>
                <Text>OFERTAS</Text>
                <Text>EXPERIENCIAS</Text>
                <Text>MI CUENTA</Text>
            </HStack>

            <IconButton aria-label="Cuenta de Usuario" icon={<FaUser />} fontSize="1.8em" variant="ghost" mr="2vw" alignSelf="center" justifySelf="end" color="white" />
        </Flex>
    );
};

export default Navbar;
