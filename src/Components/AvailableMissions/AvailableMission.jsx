import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import MissionCard from "./MissionCard";
import { MissionContext } from "../../Context/MissionContext";

const AvailableMission = () => {
  const { missions, loadingMissions } = useContext(MissionContext);
  return (
    <Box component="section" sx={{ py: "3rem" }}>
      <div className="max-1920">
        <Container maxWidth="lg">
          {missions.length === 0 ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "fff",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px 30px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: {
                    xs: "30px",
                    md: "60px",
                  },
                  fontFamily: '"Cormorant", serif',
                  fontWeight: "700",
                }}
              >
                {loadingMissions
                  ? "Loading Missions..."
                  : "No Mission Available Now."}
              </Typography>
            </Box>
          ) : (
            <>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "45px",
                    md: "65px",
                  },
                  mb: "50px",
                  fontFamily: '"Cormorant", serif',
                  fontWeight: "700",
                }}
              >
                Available Missions
              </Typography>
              <Grid container spacing={6}>
                {missions.map((mission) => (
                  <Grid item xs={12} md={6} key={mission?._id}>
                    <MissionCard mission={mission} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </div>
    </Box>
  );
};

export default AvailableMission;
