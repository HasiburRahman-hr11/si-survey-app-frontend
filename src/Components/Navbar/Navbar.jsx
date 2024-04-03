import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",

        zIndex: "99",
        borderBottom: "1px solid #d9d9d9",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "1920px", margin: "0 auto", px: "50px", py:'10px' }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h4" sx={{ color: "#000", py: "10px" }}>
                Survey App
              </Typography>
            </Link>
          </Box>
          <Box
            component="ul"
            sx={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              margin: "0",
            }}
          >
            <Box component="li">
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "#000", p: "10px" }}>
                  Sign In
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
