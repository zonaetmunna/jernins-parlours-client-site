import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const Banner = () => {
     return (
          <Container>
               <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={6}>
                              <Typography variant="h5" gutterBottom component="div">
                                   BEAUTY SALON FOR EVERY WOMEN
                              </Typography>
                              <Typography variant="body1" gutterBottom component="div">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat quam eos consectetur, qui voluptatem vero tempore nobis dolorum eaque.
                              </Typography>
                              <Button variant="contained">Get an appointment</Button>
                         </Grid>
                         <Grid item xs={12} sm={12} md={6}>
                              <img src="https://i.ibb.co/r6WGrdF/banner.jpg" style={{ width: '100%' }} alt="" />
                         </Grid>

                    </Grid>
               </Box>
          </Container>
     );
};

export default Banner;