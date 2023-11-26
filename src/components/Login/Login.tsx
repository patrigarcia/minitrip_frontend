import { useState, FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { mockLoginUser, RegistrationResponse } from "../../api/mockApi";
import { Box, Button, Input, FormControl, FormLabel, Image, VStack, Text, useToast, Card } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/m.png";

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, isLoading } = useMutation<RegistrationResponse, Error, { email: string; password: string }>(mockLoginUser, {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/profile");
        },
        onError: (err) => {
            console.error(err);
            toast({
                title: "Login error",
                description: err.message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        },
    });

    const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        mutate({ email, password });
    };

    return (
        <Card minHeight="100vh" display="flex" alignItems="center" justifyContent="center" position="relative">
            <Image position="absolute" top="5vh" left="5vw" src={logo2} alt="Logo2" w="8%" />
            <Box as="form" onSubmit={handleSubmit} p={2} borderRadius="2%" boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" w="30%" position="relative" h="auto">
                <VStack fontFamily="Raleway" p="3%">
                    <Box>
                        <Image position="relative" top="1vh" left="7vw" src={logo} alt="Logo" w="50%" mb="3vh" />
                    </Box>

                    <Text fontSize="1.5em" fontWeight="bold">
                        Log in
                    </Text>

                    <Text fontSize="0.8em" mb="3vh">
                        Enter your login credentials to continue
                    </Text>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl id="password" isRequired mb="3vh">
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>

                    <Button type="submit" bgColor="#CBB57B" color="white" isLoading={isLoading} w="full" _hover={{ bgColor: "#AB9867" }}>
                        Log in
                    </Button>
                </VStack>

                <Text mt={2} textAlign="center" fontSize="sm" fontFamily="Raleway" mb="3vh">
                    Don't have an account?{" "}
                    <RouterLink to="/register" style={{ color: "#AB9867", fontWeight: "bold" }}>
                        Sign up
                    </RouterLink>
                </Text>
            </Box>
        </Card>
    );
};

export default Login;
