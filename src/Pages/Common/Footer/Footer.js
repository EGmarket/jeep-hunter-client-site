import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { AppBar, Container, Grid, IconButton, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <>
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
          <Box>
          <Grid container spacing={3}>
            <Grid sx={{ mt: 5 }} item xs>
              <h1>JEEP HUNTER</h1>
              <p>
              Jeep is an automobile marque originating in the United States, now owned by European American conglomerate Stellantis. Jeep has been part of Chrysler since 1987,
              </p>
            </Grid>
            <Grid sx={{textAlign: 'center'}} item xs={6}>
              <h1>Our Services</h1>
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon sx={{ mt: 1 }} />
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
              <p>Home Address: 20/1 Borobag, Mirpur, Dhaka</p>
              <p>Hotline: 01319917359</p>
              <p>Mail: info@jeephunter.com</p>
            </Grid>
          </Grid>
          </Box>
          
        </Container>
      </CardContent>
    </Card>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
             Copyright © 2021 JEEP HUNTER.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


    </>
  );
};

export default Footer;
