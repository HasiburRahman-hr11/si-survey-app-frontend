import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AdminBar from "../../Components/AdminBar/AdminBar";

const Dashboard = () => {
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
              This is The Admin Dashboard.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontSize: "18px", mt: "20px", fontWeight: "300" }}
            >
              Checkout the Sidebar menu for available Admin Routes.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
