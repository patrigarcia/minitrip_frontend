// Navbar.tsx
import React from "react";
import { Flex, Box, Image, InputGroup, Icon, Button, IconButton, Stack, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { MdHome, MdLocalOffer } from "react-icons/md";
import { FaCat, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDateRangeStore from "../../store/useDateRangeStore";
import SearchBar from "../SearchBar/SearchBar";

const Navbar: React.FC = () => {
    const { startDate, endDate, setStartDate, setEndDate } = useDateRangeStore();

    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" paddingX="1.5rem" paddingY="0.5rem" bg="white" color="gray.600" borderBottomWidth="1px" borderColor="gray.200">
            <Box>
                <Image src="src/assets/images/m.png" alt="Logo" boxSize="50px" />
            </Box>

            <Stack direction={{ base: "column", md: "row" }} align="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                <Box display={{ base: "none", md: "flex" }} alignItems="center" mx="2">
                    <Icon as={MdHome} w={6} h={6} />
                    <Box mx="2">Home</Box>
                    <Icon as={MdLocalOffer} w={6} h={6} />
                    <Box mx="2">Ofertas</Box>
                </Box>

                <SearchBar />

                <InputGroup mx="2">
                    <DatePicker
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(dates: [Date | null, Date | null]) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        isClearable={true}
                        placeholderText="Selecciona tus fechas"
                    />
                </InputGroup>

                <FormControl display="flex" alignItems="center" mx="2">
                    <FormLabel htmlFor="travel-with-pets" mb="0">
                        <Icon as={FaCat} w={6} h={6} />
                    </FormLabel>
                    <Switch id="travel-with-pets" colorScheme="green" />
                </FormControl>

                <Button mx="2" colorScheme="blue">
                    Search
                </Button>
            </Stack>

            <IconButton aria-label="User Account" icon={<FaUser />} size="md" variant="ghost" isRound alignSelf="flex-end" />
        </Flex>
    );
};

export default Navbar;
