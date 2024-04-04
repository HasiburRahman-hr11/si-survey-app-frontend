import { Box, Button, Typography } from "@mui/material";
import React, { useContext} from "react";
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
        sx={{ maxWidth: "1920px", margin: "0 auto", px: "50px", py: "10px" }}
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
                  <Typography sx={{ color: "#000", p: "10px" }}>
                    Dashboard
                  </Typography>
                </Link>
              )}
            </Box>
            <Box component="li">
              {user?.email ? (
                <Button
                  sx={{ color: "#000", p: "10px" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "#000", p: "10px" }}>
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
