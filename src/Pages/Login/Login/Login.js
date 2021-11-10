import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, processLogin, isLoading, authError , signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData= {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
      processLogin(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
      signInUsingGoogle(location,history)
    }
    return (
        <Container >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt: 15}}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic"
           label="Your Email"
           name="email"
           onChange={handleOnChange}
            variant="standard" />
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic" 
           label="Your password" 
           type="password" 
           name="password"
           onChange={handleOnChange}
           variant="standard" />
          <Button 
          sx={{width:'75%', m:1}}
           type="submit" 
           variant="contained">Login</Button>
           <NavLink style={{textDecoration: 'none'}} to="/register">
           <Button variant="text">New User? Please Register</Button>
           </NavLink>
          </form>
          <p>-------------------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">Sing In With Google</Button>
        </Grid>
        <Grid item xs={4} md={6}>
          
        </Grid>
      </Grid>
    </Container>
    );
};

export default Login;