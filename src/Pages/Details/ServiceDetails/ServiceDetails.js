import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Common/Header/Header";
import OrderModal from "../../OrderBooking/OrderModal/OrderModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [details, setDetails] = useState([]);
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  useEffect(() => {
    fetch("https://shrouded-waters-34651.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const details = serviceDetails.find((service) => service._id === serviceId);
    setDetails(details);
  }, [serviceDetails]);

  return (
    <>
    <Header/>
    <Container sx={{mt:15}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            className="img-fluid"
            height="300px"
            src={details?.img}
            alt=""
            srcset=""
          />
        </Grid>
        <Grid item xs={6}>
        <h2>Name Of Car: {details?.name}</h2>
        <h3>Price: $ {details?.price}</h3>
        <h4>TimePreiod: {details?.duration}</h4>
        <h4>
          Country: {details?.country} || City: {details?.city}
        </h4>
        <p>{details?.description}</p>

        <Button onClick={handleBookingOpen} variant="contained" sx={{ mb: 3 }}>
          Book A Order
        </Button>
        </Grid>
        
      </Grid>
      
      {

      serviceDetails.map(detail => <OrderModal
    
          detail= {detail}
          openBooking={openBooking} 
          handleBookingClose={handleBookingClose}
          >
        </OrderModal>)

      }
   
    </Container>
    </>
  );
};

export default ServiceDetails;
