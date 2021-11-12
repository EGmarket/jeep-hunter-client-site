import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CarService from '../CarService/CarService';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
      fetch("https://shrouded-waters-34651.herokuapp.com/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <Container sx={{ mt: 5}}>
            <Typography variant="h3" sx={{ mb: 5 , textAlign: 'center'}}>Jeep Collection</Typography>
            <Grid container spacing={2}>
            {
                services.map(service => <CarService
                key={service._id}
                service = {service}
                ></CarService>)
            }
            </Grid>
            
        </Container>
    );
};

export default Services;