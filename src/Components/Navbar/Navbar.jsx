import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

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
      <Box
        sx={{
          maxWidth: "1920px",
          margin: "0 auto",
          px: { xs: "20px", md: "50px" },
          py: { xs: "0", md: "10px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#000",
                  py: "10px",
                  fontFamily: '"Cormorant", serif',
                  fontWeight: "700",
                }}
              >
                LoGo
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
              {user?.isAdmin && (
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#000",
                      p: "10px",
                      transition: "all 0.5s ease",
                      "&:hover": { color: "#566FFE" },
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                      },
                    }}
                  >
                    Dashboard
                  </Typography>
                </Link>
              )}
            </Box>
            <Box component="li">
              {user?.email ? (
                <Button
                  sx={{
                    color: "#000",
                    p: { xs: "5px 10px", sm: "7px 15px" },
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                    },
                    textTransform: "capitalize",
                    background: {
                      xs: "rgb(181, 233, 249)",
                    },
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#000",
                      p: { xs: "5px 10px", sm: "7px 15px" },
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                      },
                      textTransform: "capitalize",
                      background: {
                        xs: "rgb(181, 233, 249)",
                      },
                      borderRadius:"5px",
                      transition: "all 0.5s ease",
                      "&:hover":{
                        backgroundColor:"rgb(242 247 248)"
                      }
                    }}
                  >
                    Sign In
                  </Typography>
                </Link>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
