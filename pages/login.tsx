import { Box, Toolbar } from "@mui/material";
import * as React from "react";
import {
  Grid,
  Typography,
  Button,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
  Paper,
} from "@mui/material";



import Image from "next/image";
import api from "./api/api";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";


  const Login = () => {
  const [state, setState] = useState({ username: " ", password: " " });
  const [showPassword, setShowPassword] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const router = useRouter();

  async function fetchUser(
    username: string,
    password: string,

    router: NextRouter
  ) 
  {
    try {
      const rest = await api.post("api/sm-login", {
        email: username,
        password: password,
      });

      if (rest.status == 200) {
        const authToken = rest.data.Authorization;
        localStorage.setItem("authToken", authToken);
        console.log(authToken);
        router.push({
        pathname: "/dashBoard",
        query: {
            category: "all",
          },
        });
      }
    } catch (error: any) {
      console.log("error");
    }
  }

  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "#ffcdca",
      }}
    >
      <Grid container>
        <Grid item sm={12}>
          <div className="logo">
            <Image src="/images/logo.png" alt="logo" width={288} height={106} />
          </div>
        </Grid>

        <Grid sm={6}>
          <Toolbar
            sx={{
              marginLeft: "100px",
              marginTop: "24px",
            }}
          >
            <Image
              src="/images/bgImage.png"
              alt="bgImage"
              height={507}
              width={725}
            />
          </Toolbar>
        </Grid>

        <Grid item sm={5}>
          <Toolbar
            sx={{
              height: "500px",
            }}
          ></Toolbar>
        </Grid>

        <Grid item sm={5}>
          <div>
            <Box>
              <Paper
                elevation={5}
                sx={{
                  marginLeft: "55rem",
                  marginTop: "-460px",
                  height: "380px",
                  width: "345px",
                  backgroundColor: "white",
                }}
              >
                <Typography
                  variant="h4"
                  align="left"
                  sx={{
                    marginTop: "30px",
                    marginLeft: "30px",
                  }}
                >
                  Log In
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  sx={{ marginLeft: "30px", marginBottom: "30px" }}
                >
                  Please login to your account
                </Typography>

                <FormControl sx={{ m: 1, width: "17rem" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    User Id
                  </InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                         aria-label="toggle password visibility"

                          edge="end"
                        >
                          <Image
                            src="/images/iconuser.png"
                            alt="icon"
                            height={20}
                            width={24}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <FormControl sx={{ m: 1, width: "17rem" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Image
                            src="/images/passcode.png"
                            alt="icon"
                            height={20}
                            width={24}
                          />
                          {/* <Visibility/> */}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Button
                  variant="contained"
                  sx={{
                    marginLeft: "1.5%",
                    width: "80%",
                    height: "12%",
                    marginBottom: "20px",
                    backgroundColor: "#F88A12",
                  }}
                  // onClick={async () => {
                  //   await fetchUser(state.username, state.password, router);
                  // }}
                >
                  Log In
                </Button>
                <br />
                <Typography
                  variant="body1"
                  align="right"
                  sx={{
                    marginRight: "10%",
                    color: "#F88A12",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Paper>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
