import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

const CarService = () => {
  return (
    <Container>
        <Typography>Best Car Collection</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 300,
          },
        }}
      >
       
        <Paper elevation={3}>
            <img width="100%" src="https://www.pngall.com/wp-content/uploads/5/Vehicle-Red-Car-PNG-HD-Image.png" alt="" />
            <Typography>
                hello
            </Typography>
            
             </Paper>
      </Box>
    </Container>
  );
};

export default CarService;
