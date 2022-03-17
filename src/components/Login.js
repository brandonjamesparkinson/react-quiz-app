import { Button, TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <box sx={{}}>
      <form noValidate autoComplete="off">
        <TextField label="Email" name="email" varient="outlined" />
        <TextField label="Name" name="name" variant="outlined" />
        <Button type="Submit" variant="contained" size="large">
          Start
        </Button>
      </form>
    </box>
  );
}
