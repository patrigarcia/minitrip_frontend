import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { mockRegisterUser, UserRegistration, RegistrationResponse } from "../../api/mockApi";
import { Box, Button, Input, FormControl, FormLabel, VStack, Text, Image, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/m.png";
import backgroundImage from "../../assets/images/logo.png";

const Register = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const { mutate, isLoading, isError, error } = useMutation<RegistrationResponse, Error, UserRegistration>(mockRegisterUser, {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/login");
        },
        onError: (err) => {
            console.error(err);
            toast({
                title: "Error",
                description: `There was an issue signing up: ${err.message}`,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        },
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        mutate({ name, email, password });
    };

    return (
        <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" position="relative">
            <Image position="absolute" top="5vh" left="5vw" src={logo} alt="Logo" w="8%" />

            <Box p={3} borderRadius="lg" bg="white" shadow="md" width="30%" position="relative" as="form" onSubmit={handleSubmit} h="auto">
                <VStack fontFamily="Raleway" p="3%">
                    <Box mb="10vh">
                        <Image position="absolute" top="3%" left="25%" src={backgroundImage} alt="Background" w="50%" objectFit="cover" />
                    </Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Sign Up
                    </Text>
                    <Text fontSize="0.9em" mb="3vh">
                        Enter your details to create an account
                    </Text>

                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input name="name" type="text" />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" type="email" />
                    </FormControl>

                    <FormControl id="password" isRequired mb="3vh">
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" />
                    </FormControl>

                    <Button type="submit" bgColor="#CBB57B" color="white" isLoading={isLoading} w="full" _hover={{ bgColor: "#AB9867" }}>
                        Sign Up
                    </Button>
                </VStack>

                {isError && error && (
                    <Text color="red.500" mt={2}>
                        There was an issue signing up: {error.message}
                    </Text>
                )}

                <Text mt={2} textAlign="center" fontSize="0.9em">
                    Already have an account?{" "}
                    <RouterLink to="/login" style={{ color: "#AB9867", fontWeight: "bold" }}>
                        Log in
                    </RouterLink>
                </Text>
            </Box>
        </Box>
    );
};

export default Register;
