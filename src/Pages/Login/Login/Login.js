import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
     const { loginUser, user, error } = useAuth();
     const location = useLocation();
     const navigate = useNavigate();

     const [loginData, setLoginData] = useState({});
     const handleBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          console.log(newLoginData);
          setLoginData(newLoginData);

     }

     const handleSubmit = e => {
          e.preventDefault();
          loginUser(loginData.email, loginData.password, location, navigate);
     }

     return (
          <div>
               <Container>
                    <Typography>Login</Typography>
                    <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={6}>
                              <form onSubmit={handleSubmit}>


                                   <TextField
                                        sx={{ width: '75%' }}
                                        label="email"
                                        variant="standard"
                                        type="email"
                                        onBlur={handleBlur}
                                        name="email"
                                   />
                                   <TextField
                                        sx={{ width: '75%' }}
                                        label="password"
                                        variant="standard"
                                        type="password"
                                        onBlur={handleBlur}
                                        name="password"
                                   />

                                   <Button sx={{ width: '75%' }} type="submit" variant="contained">Login</Button>

                              </form>

                              <Link to="/register">Are you new user ? Register</Link>
                              {user.email && <Alert severity="success">User login successfully</Alert>
                              }
                              {error && <Alert severity="error">{error}</Alert>
                              }

                         </Grid>
                         <Grid item xs={12} sm={12} md={6}>

                         </Grid>

                    </Grid>

               </Container>
          </div>
     );
};

export default Login;