import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MissionCard from "./MissionCard";

const AvailableMission = () => {
  return (
    <Box component="section" sx={{ py: "3rem" }}>
      <div className="max-1920">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: "3rem",
              mb: "50px",
              fontFamily: '"Cormorant", serif',
              fontWeight: "700",
            }}
          >
            Available Missions
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <MissionCard isActive={false} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MissionCard joined={true} isActive={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MissionCard isActive={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MissionCard isActive={true} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default AvailableMission;
