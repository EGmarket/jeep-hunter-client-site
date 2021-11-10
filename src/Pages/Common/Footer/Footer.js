import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 400,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <CardContent>
        <Container>
          <Grid container spacing={3}>
            <Grid sx={{ mt: 5 }} item xs>
              <h1>CAR HUNTER</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                officiis tempore culpa, distinctio vitae quos, vero dolor,
                deserunt alias voluptate voluptates velit hic itaque sequi nisi
                a blanditiis laudantium fugit.
              </p>
            </Grid>
            <Grid item xs={6}>
              <h1>Our Services</h1>
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Engine Diagnostics
              </Fab>
              <div>
              <Fab  sx={{mt:1}}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Lube, Oil and Filters
              </Fab>
              </div>
              <div>
              <Fab  sx={{mt:1}}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Air Conditioning
              </Fab>
              </div>
              <div>
              <Fab  sx={{mt:1}}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Brake Repair
              </Fab>
              </div>
              <div>
              <Fab  sx={{mt:1}}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mr: 1 }} />
                Extended
              </Fab>
              </div>
            </Grid>
            <Grid item xs>
              <h1>Contact Us</h1>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Footer;
