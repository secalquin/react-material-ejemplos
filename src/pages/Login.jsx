import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Link,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { SalcoLoginButton } from "../components/Button";
import { CustomPaper } from "../components/Paper";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "100px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginLeft: "5px",
  },
  recuperarContrasena: {
    textAlign: "right",
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: "1px",
  },
  logo: {
    padding: "10px"
  },
}));

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const HandleLoginSubmit = (event) => {
    event.preventDefault();
    setLoadingButton(true);
  };

  return (
    <div>
      <Container maxWidth="xs" className={classes.container}>
        <CustomPaper elevation={3} variant="elevation">
          <Toolbar className={classes.logo}>
            <img src={process.env.PUBLIC_URL + "/img/logosb.png"} alt="logo"  />
          </Toolbar>
          <form onSubmit={HandleLoginSubmit} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Email"
              name="username"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="false"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container className={classes.recuperarContrasena}>
              <Grid item xs>
                <Link
                  variant="body2"
                  component={RouterLink}
                  to="/recuperar-contrasena"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>

            <SalcoLoginButton
              type="submit"
              fullWidth
              className={classes.submit}
              disabled={loadingButton ?? false}
            >
              {loadingButton && (
                <CircularProgress
                  className={classes.circularProgress}
                  size={20}
                />
              )}
              {loadingButton ? "Ingresando" : "Iniciar Sesión"}
            </SalcoLoginButton>
          </form>
        </CustomPaper>
      </Container>
    </div>
  );
};

export default Login;
