import {
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    HStack,
    Box,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Switch,
    Button,
} from "@chakra-ui/react";
import CustomDatePicker from "../DatePicker/DatePicker";
import SearchBar from "../SearchBar/SearchBar";
import { FaCalendarDays, FaLocationDot, FaPerson, FaCat } from "react-icons/fa6";

const Booker = () => {
    const flexWidth = useBreakpointValue({ base: "100%", md: "80%", lg: "70%" });

    return (
        <>
            <Flex direction="column" align="center" justify="center" h="20vh" w={flexWidth} mx="auto" bg="#D2C397" borderRadius={8} mt="2%">
                <VStack fontFamily="Raleway" color="white">
                    <Text fontSize={{ base: "1em", md: "1.5em", lg: "1.4em" }} as="b">
                        Busca una minicasa
                    </Text>
                    <Text mt="-5%" fontSize={{ base: "1em", md: "1.1em", lg: "1.2em" }}>
                        Vive la experiencia!
                    </Text>
                </VStack>
                <HStack mt="2%">
                    <Box color="white" fontSize="1.6em" mb="1%">
                        <FaLocationDot />
                    </Box>
                    <SearchBar />

                    <Box color="white" fontSize="1.6em" mb="1%">
                        <FaCalendarDays />
                    </Box>
                    <CustomDatePicker />
                    <Box color="white" fontSize="1.6em" ml="2%">
                        <FaPerson />
                    </Box>
                    <Box w="5vw">
                        <NumberInput min={1} max={6} bgColor="white" borderRadius={5}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box color="white" fontSize="1.6em" ml="2%">
                        <FaCat />
                    </Box>
                    <Switch sx={{ ".chakra-switch__track": { _checked: { bg: "#8CC134" } } }} />
                    <Button ml="4%" bgColor="#8CC134 " color="white" _hover={{ bgColor: "#74B20C" }}>
                        Buscar
                    </Button>
                </HStack>
            </Flex>
        </>
    );
};

export default Booker;
