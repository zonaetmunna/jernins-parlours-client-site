import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
     const { registerUser, error, user } = useAuth();
     const [loginData, setLoginData] = useState({});
     const navigate = useNavigate();

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
          if (loginData.password !== loginData.password2) {
               alert('your password didnt match');
          }
          registerUser(loginData.name, loginData.email, loginData.password, navigate);
     }

     return (

          <Container>
               <Typography>Register</Typography>
               <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                         <form onSubmit={handleSubmit}>
                              <TextField
                                   sx={{ width: '75%' }}
                                   label="name"
                                   variant="standard"
                                   type="text"
                                   onBlur={handleBlur}
                                   name="user"
                              />

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
                              <TextField
                                   sx={{ width: '75%' }}
                                   label="re-password"
                                   variant="standard"
                                   type="password"
                                   onBlur={handleBlur}
                                   name="password2"
                              />
                              <Button sx={{ width: '75%' }} type="submit" variant="contained">Register</Button>

                         </form>
                         <Link to="/login">Already have account ? please login</Link>
                         {user.email && <Alert severity="success">User created successfully</Alert>
                         }
                         {error && <Alert severity="error">{error}</Alert>
                         }

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>

                    </Grid>

               </Grid>

          </Container>

     );
};

export default Register;