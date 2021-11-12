import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-waters-34651.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container sx={{ backgroundColor: "white", mb: 5, mt: 5 }}>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>Reviews</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
          },
        }}
      >
        
          {reviews.map((review) => (
            <div>
              <Box sx={{mb: 5}}>
              <Typography variant='h5' sx={{ mt: 5 , mb: 2}}>
                {review.name}
              </Typography>
              <Typography sx={{ mb: 2}} variant='h6' >{review.text}</Typography>
              <Typography sx={{ mb: 5}} variant='h6'>{review.ratings} Starts</Typography>
              </Box>
              
            </div>
          ))}
       
      </Box>
    </Container>
  );
};

export default Reviews;
