import React from "react";
import { Flex, Image, IconButton, Text, HStack, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_w.png";

const Navbar: React.FC = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                paddingX={["1rem", "1.5rem"]}
                paddingY="0.5rem"
                bg="#D2C397"
                color="white"
                borderBottomWidth="1px"
                borderColor="gray.100"
                h="12vh"
            >
                <Flex align="center" mr={2}>
                    <Image src={logo} alt="Logo" boxSize={["50px", "60px"]} />
                </Flex>

                {isMobile ? (
                    <Menu>
                        <MenuButton as={IconButton} icon={<FaBars />} variant="outline" aria-label="Options" />
                        <MenuList>
                            <Link to="/">
                                <MenuItem>HOME</MenuItem>
                            </Link>
                            <MenuItem>OFERTAS</MenuItem>
                            <MenuItem>EXPERIENCIAS</MenuItem>
                            <MenuItem>MI CUENTA</MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <HStack spacing={20} fontFamily="Raleway" fontWeight="bold" fontSize={["0.8em", "1em", "1.1em"]}>
                        {" "}
                        <Link to="/">
                            <Text>HOME</Text>
                        </Link>
                        <Text>OFERTAS</Text>
                        <Text>EXPERIENCIAS</Text>
                        <Text>MI CUENTA</Text>
                    </HStack>
                )}

                <IconButton aria-label="Cuenta de Usuario" icon={<FaUser />} fontSize={["1.5em", "1.8em"]} variant="ghost" alignSelf="center" justifySelf="end" color="white" />
            </Flex>
        </>
    );
};

export default Navbar;
