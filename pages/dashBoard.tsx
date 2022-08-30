import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Additems from "../components/Additems"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import DataTable from "../components/Table";
import 
{ 
  Grid, 
  Tabs, 
  Tab, 
  Table, 
}
  from "@mui/material";


import { useState } from "react";
import router from "next/router";


const Dashboard = () => {
  const [showAdd, setShowAdd] = useState(false);
  // const { items, setItems } = FetchData();
  
  return (

    <Box sx={{ flexGrow: 1, backgroundColor: "#F88A124D", height: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#F88A12" }}>
        <Toolbar>
          <Image
            src="/images/initialimage.png"
            alt="image"
            height={41}
            width={50}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <IconButton>
            <PersonAddAltIcon sx={{ marginRight: "50px", color: "#ffffff" }} />
          </IconButton>
          <IconButton>
            <LogoutIcon
              sx={{ color: "#ffffff" }}
              onClick={() => {
                router.push("/login");
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        item
        sm={12}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid item sm={6}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ color: "#F88A12", margin: "30px", fontWeight: "bold" }}
            onClick={() => {
                router.push({
                  pathname: "/login",
                });
            }}
          >
            back
          </Button>
        </Grid>

        <h1> Items </h1>

        <Grid item sm={6}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ color: "#F88A12", margin: "30px", fontWeight: "bold" }}
            onClick={() => setShowAdd(true)}
          >
            + Add Items
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ margin: "0", width: "50%", justifyContent: "center" }}
      >
        <Tabs aria-label="basic tabs example">
          <Tab
            value="1"
            label="All items"
            sx={{ fontWeight: "bold", fontSize: "medium" }}
          />
          <Tab
            value="2"
            label="vegetables"
            sx={{ fontWeight: "bold", fontSize: "medium" }}
          />
          <Tab
            value="3"
            label="fruits"
            sx={{ fontWeight: "bold", fontSize: "medium" }}
          />
          <Tab
            value="4"
            label="others"
            sx={{ fontWeight: "bold", fontSize: "medium" }}
          />
        </Tabs>
      </Grid>
      <Table>
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "50%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        </Table>

      < DataTable items={undefined} setItems={undefined} />
      < Additems
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        setItems={undefined}
      />
    </Box>
  );
};

export default Dashboard;

