import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Card sx={{ minWidth: 275, minHeight: 400 , backgroundColor: "black", color: "white" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs>
           <h2>About</h2>
          </Grid>
          <Grid item xs={6}>
            <h1>hello</h1>
          </Grid>
          <Grid item xs>
          <h1>hello</h1>
          </Grid>
        </Grid>
      </CardContent>
      
    </Card>
  );
};

export default Footer;
