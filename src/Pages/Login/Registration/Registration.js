import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



const Registration = () => {
    const {createNewUser, isLoading, user, error} = useAuth();
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData= {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('your password didnt matched')
            return
        }
        createNewUser(loginData.email, loginData.password , loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt: 15}}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
         { !isLoading && <form onSubmit={handleLoginSubmit}>
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic"
           label="Your Name"
           type="text"
           name="name"
           onBlur={handleOnChange}
            variant="standard" />
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic"
           label="Your Email"
           type="email"
           name="email"
           onBlur={handleOnChange}
            variant="standard" />
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic" 
           label="Your password" 
           type="password" 
           name="password"
           onBlur={handleOnChange}
           variant="standard" />
          <TextField
           sx={{width:'75%', m:1}} 
           id="standard-basic" 
           label="re-type your password" 
           type="password" 
           name="password2"
           onBlur={handleOnChange}
           variant="standard" />
          <Button 
          sx={{width:'75%', m:1}}
           type="submit" 
           variant="contained">Login</Button>
           <NavLink style={{textDecoration: 'none'}} to="/login">
           <Button variant="text">Already Register? Please Login</Button>
           </NavLink>
          </form>}
          {isLoading &&  <CircularProgress />}
          {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={4} md={6}>
        
        </Grid>
      </Grid>
    </Container>
    );
};

export default Registration;