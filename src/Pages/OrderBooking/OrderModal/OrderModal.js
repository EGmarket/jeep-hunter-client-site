import React, { useState } from 'react';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";


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

const OrderModal = ({openBooking, handleBookingClose , detail}) => {
    const {name, price} = detail;
    const {user} = useAuth();
  const initialBookingInfo = {customerName: user.displayName, email: user.email, phone: ''}
  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo)
  }

  const handleBookSubmit = e => {
    
    const order = {
      ...bookingInfo,
      productName: name,
      price: price
     
    }

    fetch('https://shrouded-waters-34651.herokuapp.com/orders', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        alert('Booking Successfully Done');
        handleBookingClose();
      }
    })

     

     e.preventDefault();
  }

    return (
        <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
           Order Form
          </Typography>
         
          <form onSubmit={handleBookSubmit}>
            <TextField
              disabled
              sx={{width: '90%', m: 1}}
              label="Booking Time"
              id="outlined-size-small"
              defaultValue="time"
              size="small"
            />
            <TextField
              sx={{width: '90%', m: 1}}
              label="Your Name"
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{width: '90%', m: 1}}
              label="Phone Number"
              name="phone"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue="phone"
              size="small"
            />
            <TextField
              sx={{width: '90%', m: 1}}
              label="Email"
              name="email"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue={user.email}
              size="small"
            />
            <TextField
            
              sx={{width: '90%', m: 1}}
              label="Date"
              id="outlined-size-small"
              defaultValue="time"
              size="small"
            />
            <TextField
           
              sx={{width: '90%', m: 1}}
              label="country"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              name="country"
              defaultValue="country"
              size="small"
            />
            <TextField
           
              sx={{width: '90%', m: 1}}
              label="billing"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              name="billing"
              defaultValue="billing_Address"
              size="small"
            />
            <TextField
          
              sx={{width: '90%', m: 1}}
              label="address"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              name="address"
              defaultValue="delivery_address"
              size="small"
            />
            <Button type="submit" variant="contained">SEND</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
    );
};

export default OrderModal;