import { Alert, Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { MissionContext } from "../../Context/MissionContext";
import axios from "axios";

const DeleteMission = ({ openModal, handleCloseModal, missionId }) => {
  const [alertPopup, setAlertPopup] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const { setMissions, missions } = useContext(MissionContext);

  const handleDeleteMission = async () => {
    const token = localStorage.getItem("sv-token");
    closeAlertTimer();

    if (!token) {
      setError(
        "Unauthorized access. Only admins are allowed to edit missions."
      );
      setAlertPopup(true);
      return;
    }
    setIsDeleting(true);

    try {
      const res = await axios.delete(
        `http://localhost:8000/mission/delete/${missionId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.status === 403) {
        setError("Unauthorized access.");
        setAlertPopup(true);
      }
      if (res.data) {
        setMissions(missions.filter((mission) => mission._id !== missionId));
        setError("");
        setResponseMessage("Mission deleted successfully.");
        setAlertPopup(true);

        handleCloseModal();
      }
      setIsDeleting(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setAlertPopup(true);
      console.error(error);
      setIsDeleting(false);
    }
  };
  // Close Alert after 5 seconds
  const closeAlertTimer = () => {
    setTimeout(() => {
      setAlertPopup(false);
    }, 5000);
  };

  return (
    <>
      {alertPopup && (
        <Alert
          sx={{ position: "fixed", top: "0", right: "0", zIndex: "1400" }}
          severity={error ? "error" : "success"}
          onClose={() => setAlertPopup(false)}
        >
          {error ? error : responseMessage}
        </Alert>
      )}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "500px",
            backgroundColor: "#fff",
            padding: "30px 30px",
            height: "max-content",
            maxHeight: "700px",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              textAlign: "center",
              fontFamily: '"Cormorant", serif',
              fontWeight: "700",
              mb: "30px",
            }}
          >
            Delete This Mission?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "10px" }}
              onClick={handleDeleteMission}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "10px" }}
              onClick={() => handleCloseModal()}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteMission;
