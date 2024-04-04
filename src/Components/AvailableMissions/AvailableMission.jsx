import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import MissionCard from "./MissionCard";
import { MissionContext } from "../../Context/MissionContext";

const AvailableMission = () => {
  const {missions} = useContext(MissionContext);
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
            {missions.map((mission)=> (
              <Grid item xs={12} sm={6} key={mission?._id}>
              <MissionCard mission={mission} />
            </Grid>
            ))}
            
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default AvailableMission;
