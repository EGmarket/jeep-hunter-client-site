import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Container, Typography } from '@mui/material';

const Reviews = () => {
    return (
        <Container sx={{backgroundColor: 'black', mb: 5, mt: 5}}>
            <Typography sx={{color: 'white'}}>Reviews</Typography>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 200,
        },
      }}
    >
      <Paper> 
      <Avatar sx={{height: 1, width: 1 , mt: -5 }} alt="Remy Sharp" src="https://cdn0.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-18-512.png" />

      <Typography sx={{ mt: -5 }}>MD ASADUZZAMAN</Typography>
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
      </Paper>
    </Box>
    </Container>
    );
};

export default Reviews;