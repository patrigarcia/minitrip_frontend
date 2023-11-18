import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { Box, Button, TextField, Typography, Paper, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import backgroundImage from "../../assets/Images/meeting_image.png";

const Login = () => {
    const navigate = useNavigate();
    const { mutate, isLoading, isError, error } = useMutation(loginUser, {
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/profile");
        },
        onError: (err) => {
            console.error(err);
        },
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        mutate({ email, password });
    };

    const backgroundStyle = { position: "absolute", height: "60%", width: "60%" };

    const logoStyle = { position: "absolute", top: "7%", left: "5%", width: "100%" };

    const paperStyle = { padding: 3, borderRadius: 2, marginLeft: "40%" };

    const formTextStyle = { my: 1 };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ ...logoStyle, top: "7%", left: "5%" }}>
                <img src={logo} alt="Logo" style={{ width: "100%" }} />
            </Box>
            <Box sx={{ ...backgroundStyle, top: "22%", left: "10%" }}>
                <img src={backgroundImage} alt="Background" style={{ height: "100%", width: "auto" }} />
            </Box>
            <Paper elevation={3} sx={paperStyle}>
                <Box component="form" onSubmit={handleSubmit} sx={{ "& .MuiTextField-root": formTextStyle }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Log in
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Enter your login credentials to continue
                    </Typography>
                    <TextField required id="email" name="email" label="Email" type="email" fullWidth variant="outlined" />
                    <TextField required id="password" name="password" label="Password" type="password" fullWidth variant="outlined" />
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1, bgcolor: "#6EE4C2", "&:hover": { bgcolor: "#61C9AB" } }} fullWidth disabled={isLoading}>
                        {isLoading ? "Logging In..." : "Log in"}
                    </Button>
                </Box>
                {isError && error instanceof Error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        There was an issue logging in: {error.message}
                    </Alert>
                )}
                <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: "#008080" }}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
