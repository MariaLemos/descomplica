import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Card,
  Button,
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
          bgcolor: deepPurple[500],
        }}
      >
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

          <FormHelperText id="tarefa_titulo_helper_text">Login.</FormHelperText>
          <Button onClick={salvaLogin}>ok</Button>
        </FormControl>
      </Grid>
    </Card>
  );
};
export default Login;
