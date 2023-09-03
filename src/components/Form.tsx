import { TextField, Box, Typography, Slider, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import React from "react";
import dayjs from "dayjs";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAddProductMutation } from "@/redux/features/apiSlice";
import { setAddedBook } from "@/redux/features/addBookSlice";

export default function Form() {
  const dispatch = useDispatch<AppDispatch>();
  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    author: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required"),
    date: yup
      .date()
      .max(
        dayjs().subtract(1, "day").format("YYYY-MM-DD"),
        "Max date must be at least 1 day ago"
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      author: "",
      date: null,
      rating: 2,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const dateObject = dayjs(values.date);
        // Format as "YYYY-MM-DD"
        const formattedDate = dateObject.toISOString().split("T")[0];

        const response = await addProduct({
          title: values.name,
          category: values.author,
          date: formattedDate,
          rating: values.rating,
        }).unwrap();

        dispatch(setAddedBook(response));
        resetForm();
        formik.setFieldValue("rating", 2);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <TextField
        id="name"
        name="name"
        type="text"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        required
      />
      <TextField
        variant="outlined"
        id="author"
        name="author"
        type="text"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
        required
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box>
          <DatePicker
            label="Publish Date"
            value={formik.values.date}
            onChange={(newValue) => formik.setFieldValue("date", newValue)}
          />
          {formik.touched.date && formik.errors.date && (
            <div>{formik.errors.date}</div>
          )}
        </Box>
      </LocalizationProvider>
      <Box sx={{ width: 300 }}>
        <Typography gutterBottom>Set a rating</Typography>
        <Slider
          step={1}
          min={1}
          max={5}
          value={formik.values.rating}
          defaultValue={formik.values.rating}
          valueLabelDisplay="auto"
          onChange={(_event, newValue) => {
            formik.setFieldValue("rating", newValue);
          }}
        />
      </Box>
      <Button
        className="w-1/2 min-w-[200px] mx-auto my-2.5"
        variant="outlined"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
