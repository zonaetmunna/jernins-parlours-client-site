import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';


const BookingList = () => {
     const { user } = useAuth();
     const [bookings, setBookings] = useState([]);
     useEffect(() => {
          const url = `http://localhost:5000/booking?email=${user.email}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setBookings(data);
               })
     }, [])


     return (
          <Container>
               <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              bookings.map(booking => <Grid
                                   key={booking._id}
                                   item xs={2} sm={4} md={4} >

                                   <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                             component="img"
                                             height="140"
                                             image="/static/images/cards/contemplative-reptile.jpg"
                                             alt="green iguana"
                                        />
                                        <CardContent>
                                             <Typography gutterBottom variant="h5" component="div">
                                                  {booking.serviceName}
                                             </Typography>
                                             <Typography variant="body2" color="text.secondary">
                                                  {booking.servicePrice}
                                             </Typography>
                                        </CardContent>
                                        <CardActions>
                                             <Button size="small">Share</Button>

                                        </CardActions>
                                   </Card>
                              </Grid>)
                         }


                    </Grid>
               </Box>
          </Container>
     );
};

export default BookingList;