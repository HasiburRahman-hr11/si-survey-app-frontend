import { Alert, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MissionCard = ({ mission }) => {
  const [isJoined, setIsJoined] = useState(false);
  const [alertPopup, setAlertPopup] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);


  // const isUserParticipant = (mission) => {
  //   return mission.participants.includes(user.userId);
  // };

  const handleJoinMission = async () => {
    const token = localStorage.getItem("sv-token");
    closeAlertTimer();
    if (!token) {
      setError("You must login to join a mission!");
      setAlertPopup(true);
      return;
    }
    setIsUpdating(true);
    try {
      const res = await axios.put("http://localhost:8000/mission/add-user", {
        userId: user.userId,
        missionId: mission._id,
      });
      if(res.status === 404){
        setError("Mission not found!");
        setAlertPopup(true);
      }
      if(res.status === 400){
        setError("User is already a participant in this mission.");
        setAlertPopup(true);
      }
      if (res.status === 200) {
        setError("");
        setResponseMessage("Participated successfully.");
        setAlertPopup(true);
        setIsJoined(true)
      }
      setIsUpdating(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setAlertPopup(true);
      console.error(error);
      setIsUpdating(false);
    }
  };

  const handleCancelMission = async() =>{
    closeAlertTimer();

    setIsUpdating(true);
    try {
      const res = await axios.put("http://localhost:8000/mission/remove-user", {
        userId: user.userId,
        missionId: mission._id,
      });
      if(res.status === 404){
        setError("Something went wrong!");
        setAlertPopup(true);
      }

      if (res.status === 200) {
        setError("");
        setResponseMessage("Mission canceled successfully.");
        setAlertPopup(true);
        setIsJoined(false)
      }
     
      setIsUpdating(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setAlertPopup(true);
      console.error(error);
      setIsUpdating(false);
    }
  }

  // Close Alert after 5 seconds
  const closeAlertTimer = () => {
    setTimeout(() => {
      setAlertPopup(false);
    }, 5000);
  };
  useEffect(()=>{
    if(mission.participants.includes(user.userId)){
      setIsJoined(true);
    }
    if(!user.userId){
      setIsJoined(false);
    }
  },[mission, user]);
  return (
    <>
      {alertPopup && (
        <Alert
          sx={{ position: "fixed", top: "0", right: "0", zIndex: "100" }}
          severity={error ? "error" : "success"}
          onClose={() => setAlertPopup(false)}
        >
          {error ? error : responseMessage}
        </Alert>
      )}
      <Box
        component="div"
        sx={{
          height: "100%",
          border: "1px solid #f1f1f1",
          borderRadius: "10px",
          backgroundColor: `${isJoined ? "rgb(211, 243, 226)" : "#fff"
          }`,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "30px 30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: "15px",
            fontFamily: '"Cormorant", serif',
            fontWeight: "700",
          }}
        >
          {mission?.title}
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
          {mission?.description}
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
                  backgroundColor: `${mission?.isOpen ? "green" : "red"}`,
                  display: "inline-block",
                  mr: "5px",
                }}
              ></Box>
              Status: {mission?.isOpen ? "Open" : "Closed"}
            </Typography>
          </Box>
          {mission?.isOpen && (
            <Box sx={{ width: "max-content" }}>
              {!isJoined ? (
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={handleJoinMission}
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Participate"}
                </Button>
              ) : (
                <Button variant="outlined" size="medium" onClick={handleCancelMission} disabled={isUpdating}>
                  {isUpdating ? "Updating..." : "Cancel Mission"}
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MissionCard;
