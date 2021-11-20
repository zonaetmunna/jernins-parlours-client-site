import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import ReviewBanner from '../ReviewBanner/ReviewBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <Banner></Banner>
               <Services></Services>
               <ReviewBanner></ReviewBanner>
               <Testimonials></Testimonials>
               <Form></Form>
          </div>
     );
};

export default Home;