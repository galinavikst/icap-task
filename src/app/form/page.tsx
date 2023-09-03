"use client";
import RadioGroupRating from "@/components/RadioGroupRating";
import { useAppSelector } from "@/redux/store";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Form from "@/components/Form";

export default function FormPage() {
  const addedBooks = useAppSelector((state) => state.addBook.addedBooks);

  return (
    <Box className="flex flex-col justify-center items-center">
      <Typography variant="h3" gutterBottom>
        Add your book
      </Typography>
      <Paper className="p-5 w-[500px]">
        <Form />
      </Paper>
      <List className="flex  flex-wrap my-5 w-full justify-center items-center">
        {addedBooks?.map((book) => (
          <ListItem
            key={book.id}
            className="w-full md:w-[45%] flex justify-center"
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {book.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {book.category}
                </Typography>
              </CardContent>
              <CardActions>
                <RadioGroupRating rating={book.rating} />
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
