import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logout} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{color: 'white', backgroundColor:'red'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JEEP HUNTER
          </Typography>
          <NavLink sx={{textDecoration: 'none'}} to ="/collection">
          <Button variant="contained" >Cars</Button>
          </NavLink>
          
          {
            user?.email  ? 
           <Box>
            <Button onClick={logout} color="inherit">LogOut</Button>
            <Button  color="inherit">Hello, {user.displayName}</Button>
             <NavLink to='/dashboard'>
               <Button  variant="contained">Dashboard</Button>
             </NavLink>
           </Box>
           :
          <NavLink to="/login">
          <Button color="inherit">Login</Button>
          </NavLink>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;