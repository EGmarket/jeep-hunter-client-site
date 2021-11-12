import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container } from "@mui/material";
import { Link } from "react-router-dom";

const CarService = (props) => {
    const {name, description, img, _id} = props.service;

  return (
      <Card sx={{ maxWidth: 345 , mx: 2, mb:2}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Link to={`/service/${_id}`}>
                <Button className="mx-5 btn-lg">Details</Button>
              </Link>
          </CardContent>
        </CardActionArea>
      </Card>
   
  );
};

export default CarService;
