import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import AdminBar from "../../Components/AdminBar/AdminBar";
import { AuthContext } from "../../Context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <AdminBar />
      <Box sx={{ py: "100px", textAlign: "center" }}>
        <Container maxWidth="xl">
          <Box>
            <Typography
              component="h3"
              variant="h3"
              sx={{ fontFamily: '"Cormorant", serif', fontWeight: "700" }}
            >
              Welcome Aboard {user.name}.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontSize: "18px", mt: "20px", fontWeight: "300" }}
            >
              Checkout the Sidebar menu for available Routes.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
