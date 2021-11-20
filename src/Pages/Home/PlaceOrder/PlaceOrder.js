import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from '@mui/material';
import userEvent from '@testing-library/user-event';
import useAuth from '../../../Hooks/useAuth';

const PlaceOrder = () => {
     const { id } = useParams();
     const { user } = useAuth();
     const [orderData, setOrderData] = useState({});

     const [service, setService] = useState({});
     const [success, setSuccess] = useState(false);
     useEffect(() => {
          const url = `http://localhost:5000/services/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setService(data);
               })
     }, []);

     const handleBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newOrderData = { ...orderData };
          newOrderData[field] = value;
          console.log(newOrderData);
          setOrderData(newOrderData);
     }

     const handleSubmit = e => {
          e.preventDefault();
          const bookingInfo = {
               ...service
          };
          // save to database
          const url = `http://localhost:5000/booking`;
          fetch(url, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(bookingInfo)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                         alert('booking successfully');
                         setService('');
                         setSuccess(true);

                    }
               })

     }

     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                         <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                   component="img"
                                   height="140"
                                   image={service.image}
                                   alt="green iguana"
                              />
                              <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                        {service.name}
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                        ${service.price}
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                        {service.description}
                                   </Typography>
                              </CardContent>

                         </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                         <Typography>Booking ? Please give information</Typography>
                         <form onSubmit={handleSubmit}>
                              <TextField
                                   sx={{}}
                                   label={user.name}
                                   variant="standard"
                                   onBlur={handleBlur}
                                   defaultValue={user.name}
                                   name="userName"

                              />
                              <br />
                              <TextField
                                   sx={{}}
                                   label={user.email}
                                   variant="standard"
                                   onBlur={handleBlur}
                                   defaultValue={user.email}
                                   name="email"


                              />
                              <br />
                              <TextField
                                   sx={{}}
                                   label={service.name}
                                   variant="standard"
                                   onBlur={handleBlur}
                                   defaultValue={service.name}
                                   name="serviceName"


                              />
                              <br />

                              <TextField
                                   sx={{}}
                                   label={service.price}
                                   variant="standard"
                                   onBlur={handleBlur}
                                   defaultValue={service.price}
                                   name="servicePrice"


                              />
                              <br />
                              <TextField
                                   sx={{}}
                                   label="quantity"
                                   variant="standard"
                                   onBlur={handleBlur}
                                   name="quantity"
                              />
                              <br />
                              <Button variant="contained" type="submit">Booking</Button>


                         </form>
                    </Grid>

               </Grid>
          </Container>

     );
};

export default PlaceOrder;