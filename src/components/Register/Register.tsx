// Register.tsx
import React, { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { mockRegisterUser, UserRegistration, RegistrationResponse } from "../../api/mockApi";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/m.png";
import backgroundImage from "../../assets/images/tiny.jpeg";

const Register = () => {
    const navigate = useNavigate();

    const { mutate, isLoading, isError, error } = useMutation<RegistrationResponse, Error, UserRegistration>(mockRegisterUser, {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/login");
        },
        onError: (err) => {
            console.error(err);
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

    const backgroundStyle = { position: "absolute", height: "60%", width: "60%" };
    const logoStyle = { position: "absolute", top: "7%", left: "5%", width: "100%" };
    const paperStyle = { padding: 3, borderRadius: 2, marginLeft: "50%" };
    const formTextStyle = { my: 1 };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ ...logoStyle, top: "7%", left: "7.5%" }}>
                <img src={logo} alt="Logo" style={{ width: "7%" }} />
            </Box>
            <Box sx={{ ...backgroundStyle, top: "30%", left: "8%" }}>
                <img src={backgroundImage} alt="Background" style={{ height: "50vh", width: "auto" }} />
            </Box>
            <Paper elevation={3} sx={{ ...paperStyle, width: "30%" }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ "& .MuiTextField-root": formTextStyle }}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: "1.5em", fontWeight: "bold" }}>
                        Sign Up
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter your details to create an account
                    </Typography>
                    <TextField required id="name" name="name" label="Name" type="text" fullWidth variant="outlined" />
                    <TextField required id="email" name="email" label="Email" type="email" fullWidth variant="outlined" />
                    <TextField required id="password" name="password" label="Password" type="password" fullWidth variant="outlined" />
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1, bgcolor: "#6EE4C2", "&:hover": { bgcolor: "#61C9AB" } }} fullWidth disabled={isLoading}>
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                </Box>
                {isError && error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        There was an issue signing up: {error.message}
                    </Alert>
                )}
                <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#008080" }}>
                        Log in
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Register;
