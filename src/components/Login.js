import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useForm from "../hooks/useForm";
import Center from "./Center";

const getFreshModel = () => ({
  name: "",
  email: "",
});

export default function Login() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const login = (e) => {
    e.preventDefault();
    if (validate()) console.log(values);
  };

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid.";
    temp.name = values.name != "" ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };

  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Quiz App
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                margin: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete="off" onSubmit={login}>
              <TextField
                label="Email"
                name="email"
                values={values.email}
                onChange={handleInputChange}
                varient="outlined"
                {...(errors.email && { error: true, helperText: errors.email })}
              />
              <TextField
                label="Name"
                name="name"
                values={values.name}
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.name && { error: true, helperText: errors.name })}
              />
              <Button
                type="Submit"
                variant="contained"
                size="large"
                sx={{
                  width: "90%",
                }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
