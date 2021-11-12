import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: 'red'
}));
const CarInfo = () => {


  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch("https://shrouded-waters-34651.herokuapp.com/info")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return (
    <>
    <Container>
      
      {
        banners.map(banner => <div>
          <Grid container spacing={3}>
          <Grid sx={{textAlign:'center'}} item xs={8}>
        <img width="100%"
          src={banner.img}
          alt=""
          srcset=""
        />
      </Grid>

      <Grid item xs={4}>
        <Stack sx={{mt: 10 }} spacing={2}>
          <Item sx={{color: 'white'}}>{banner.name3}</Item>
          <Item sx={{color: 'white'}}>{banner.name2}</Item>
          <Item sx={{color: 'white'}}>{banner.name1}</Item>
          
        </Stack>
      </Grid>
      </Grid>
        </div>)
      }
      
   
      
    </Container>
    </>
  );
};

export default CarInfo;
