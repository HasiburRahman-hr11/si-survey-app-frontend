import { Box, Button, Typography } from "@mui/material";
import React from "react";

const MissionCard = ({ joined, isActive }) => {
  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        border: "1px solid #f1f1f1",
        borderRadius: "10px",
        backgroundColor: `${joined ? "rgb(211, 243, 226)" : "#fff"}`,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        padding: "30px 30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: "15px", fontFamily: '"Cormorant", serif', fontWeight: "700" }}
      >
        Mission Card
      </Typography>
      <Typography
        component="p"
        variant="p"
        sx={{
          fontFamily: '"Roboto", sans-serif',
          fontWeight: "300",
          color: "#333333",
          fontSize: "14px",
          textAlign: "justify",
          lineHeight: "1.5",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        facere incidunt accusamus blanditiis quas! Incidunt, modi repudiandae.
        Voluptatibus ex, labore illum ipsa, inventore earum voluptas accusantium
        adipisci consectetur beatae similique.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "30px",
        }}
      >
        <Box sx={{ width: "47%" }}>
          <Typography
            component="p"
            variant="p"
            sx={{
              fontFamily: '"Roboto", sans-serif',
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: `${isActive ? "green" : "red"}`,
                display: "inline-block",
                mr: "5px",
              }}
            ></Box>
            Status: {isActive ? "Open" : "Closed"}
          </Typography>
        </Box>
        {isActive && (
          <Box sx={{ width: "max-content" }}>
            {!joined ? (
              <Button variant="outlined" size="medium">
                Participate
              </Button>
            ) : (
              <Button variant="outlined" size="medium">
                Cancel Mission
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MissionCard;
