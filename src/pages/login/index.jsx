import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Card,
  Button,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { deepPurple } from "@mui/material/colors";

const Login = () => {
  const [login, setLogin] = useState();
  const salvaLogin = () => {
    localStorage.setItem("usuario", login);
    window.location.reload();
  };

  return (
    <Card
      fullWidth
      fullHeight
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          maxWidth: 300,
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
          flexWrap: "wrap",
          gap: 3,
          bgcolor: deepPurple[500],
        }}
      >
        <Typography variant="h4"> Login</Typography>
        <FormControl fullWidth>
          <InputLabel>usuario</InputLabel>
          <Input
            id="usuario"
            aria-describedby="usuario"
            value={login}
            fullWidth
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />

          <Button onClick={salvaLogin}>entrar</Button>
        </FormControl>
      </Grid>
    </Card>
  );
};
export default Login;
