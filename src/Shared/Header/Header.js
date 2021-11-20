import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <Box sx={{ flexGrow: 1 }}>
               <AppBar position="static">
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
                              News
                         </Typography>
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              <Link to="/allServices" style={{ textDecoration: 'none', color: 'white', marginRight: "10px" }}>More</Link>
                         </Typography>
                         <Typography variant="h6" component="div" >
                              <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: "10px" }}>Home</Link>
                         </Typography>
                         <Typography variant="h6" component="div" >
                              <Link to="/home" style={{ textDecoration: 'none', color: 'white', marginRight: "10px" }}>portfolio</Link>
                         </Typography>
                         {user.email && < Typography variant="h6" component="div" >
                              <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white', marginRight: "10px" }}>Dashboard</Link>
                         </Typography>}

                         {user.email ? <Button onClick={logOut} color="inherit">logOut</Button> :
                              <NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
                         }


                    </Toolbar>
               </AppBar>
          </Box >
     );
};

export default Header;