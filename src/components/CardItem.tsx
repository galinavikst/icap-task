import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import RadioGroupRating from "./RadioGroupRating";
import { ProductTableRow } from "@/redux/features/tableSlice";

interface CardItemProps {
  prod: ProductTableRow;
}

export default function CardItem({ prod }: CardItemProps) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prod.images[0]}
          alt={prod.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {prod.description}
          </Typography>
          <RadioGroupRating rating={Math.round(prod.rating)} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
