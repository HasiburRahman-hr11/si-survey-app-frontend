import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { MissionContext } from "../../Context/MissionContext";

const AddMission = ({ openModal, handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [alertPopup, setAlertPopup] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const { missions, setMissions } = useContext(MissionContext);

  const handleSubmit = async () => {
    const token = localStorage.getItem("sv-token");
    closeAlertTimer();

    if (!title) {
      setError("Mission title is required!");
      setAlertPopup(true);
      return;
    }
    if (!token) {
      setError(
        "Unauthorized access. Only admins are allowed to create missions."
      );
      setAlertPopup(true);
      return;
    }
    setIsCreating(true);

    try {
      const res = await axios.post(
        `http://localhost:8000/mission/create`,
        {
          title,
          description,
          isOpen,
        },
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
        setMissions([res.data.mission, ...missions]);
        setError("");
        setResponseMessage("Mission created successfully.");
        setAlertPopup(true);
        setTitle("");
        setDescription("");
        setIsOpen(true);
        handleCloseModal();
      }
      setIsCreating(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      setAlertPopup(true);
      console.error(error);
      setIsCreating(false);
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
            maxWidth: "750px",
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
            Add Mission
          </Typography>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="missionTitle"
              label="Mission Title"
              name="missionTitle"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              id="missionDescription"
              label="Mission Description"
              name="missionDescription"
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Typography variant="p" component="p" sx={{ mt: "20px" }}>
              Mission Status
            </Typography>
            <FormControlLabel
              control={
                <Switch checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
              }
              label={isOpen ? "Mission is open now" : "Mission is closed now"}
            />
            <Box>
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{
                  py: "10px",
                  mt: "20px",
                }}
              >
                {isCreating ? "Creating..." : "Add Mission"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddMission;
