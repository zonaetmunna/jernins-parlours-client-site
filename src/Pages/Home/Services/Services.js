import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';



const Services = () => {
     const [services, setServices] = useState([]);
     useEffect(() => {
          const url = 'http://localhost:5000/services';
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setServices(data);
               })
     }, [])


     return (
          <Container>
               <Typography variant="h4" sx={{}}>our awesome services</Typography>
               <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              services.slice(0, 6).map(service => <Service
                                   key={service._id}
                                   service={service}
                              ></Service>)
                         }
                    </Grid>
               </Box>

          </Container>
     );
};

export default Services;