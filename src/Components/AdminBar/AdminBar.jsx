import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";

const AdminBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "rgb(181, 233, 249)", color: "#3e3879" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: '"Cormorant", serif',
                fontWeight: "700",
              }}
            >
              Dashboard
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {openSidebar && (
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              backgroundColor: "#f9f9f9",
              width: "300px",
              padding: "50px 0",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
              position: "fixed",
              left: "0",
              top: "0",
              zIndex: "99",
              height: "100%",
              minHeight: "100vh",
            }}
            className="admin-sidebar"
          >
            <Box
              sx={{
                position: "absolute",
                width: "40px",
                height: "40px",
                color: "#3e3879",
                top: "10px",
                right: "20px",
                cursor: "pointer",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setOpenSidebar(false)}
            >
              <CloseIcon fontSize="large" />
            </Box>
            <MenuList>
              <Link to="/admin">
                <MenuItem
                  sx={{ color: "#333", py: "15px" }}
                  onClick={() => setOpenSidebar(false)}
                >
                  <ListItemIcon>
                    <DashboardIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/admin/missions">
                <MenuItem
                  sx={{ color: "#333", py: "15px" }}
                  onClick={() => setOpenSidebar(false)}
                >
                  <ListItemIcon>
                    <CallMissedOutgoingIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>All Missions</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              {/* <Link to="/admin/users">
                <MenuItem
                  sx={{ color: "#333", py: "15px" }}
                  onClick={() => setOpenSidebar(false)}
                >
                  <ListItemIcon>
                    <PersonIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Users</ListItemText>
                </MenuItem>
              </Link> */}
              <Divider />
              <Link to="/">
                <MenuItem
                  sx={{ color: "#333", py: "15px" }}
                  onClick={() => setOpenSidebar(false)}
                >
                  <ListItemIcon>
                    <HomeIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>Visit Home</ListItemText>
                </MenuItem>
              </Link>
            </MenuList>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: "20",
              backgroundColor: "rgba(0,0,0,0.3)",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              left: "0",
              top: "0",
            }}
            onClick={() => setOpenSidebar(false)}
          ></Box>
        </Box>
      )}
    </>
  );
};

export default AdminBar;
