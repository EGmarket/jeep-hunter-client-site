import { Container, Grid } from "@mui/material";
import React from "react";
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
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs>
          <Stack sx={{mt: 10}} spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://simg.nicepng.com/png/small/778-7788800_financing-car-car-top-view-png.png"
            alt=""
            srcset=""
          />
        </Grid>
        <Grid item xs>
        <Stack sx={{mt: 10}} spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarInfo;
