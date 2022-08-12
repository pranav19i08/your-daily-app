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


import logo from "/Users/pranavmishra/your-daily-app/pages/images/Wihite BG horizontal.png";


const Login = () => {

  return (
    <Box 
      height="100vh"
      sx={{
        background: "#ffcdca",
        height: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <div>
            <Toolbar
              sx={{
                marginLeft: "100px",
                marginTop: "24px",
              }}
            >
              <Image src={logo} alt="logo" />
            </Toolbar>
          </div>
        </Grid>

        <Grid item sm={8}>
          <Toolbar
            sx={{
              height: "500px",
            }}
          >
          <Image src={loginimg} alt="login" className={styles.logoImg} />
          </Toolbar>
        </Grid>
        <Grid item sm={4}>
          <div className={styles.logincard}>
            <Box
            >
              <Paper
                elevation={3}
                sx={{
                  
                  paddingLeft: "35px",
                  marginTop: "70px",
                  height: "418px",
                  width: "400px",
                  backgroundColor: "white",
                }}
              >

                < Typography
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

                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                 
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    User Id
                  </InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          // aria-label="toggle password visibility"

                          edge="end"
                        >
                          <Image src={iconuser} alt="login" />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                
                >
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
                          <Image src={iconpassword} alt="login" />

                        {/* <Visibility/> */}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Button
                  variant="contained"
                  onClick={clickHandler}
                  sx={{
                    width: "80%",
                    height: "12%",
                    marginBottom: "20px",
                    backgroundColor: "#F88A12",
                  }}
                >
                  Log In
                </Button>
                <br />
                <Typography
                  variant="body1"
                  align="right"
                  sx={{
                    marginRight: "10%",
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

