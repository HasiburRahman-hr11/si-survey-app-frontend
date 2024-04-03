import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

const AddMission = ({ openModal, handleCloseModal }) => {
  const [addMissionSuccess, setAddMissionSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please Fill The Form First!");
    } else {
      setAddMissionSuccess(true);
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Close Alert after 5 seconds
    let closeAlertTimer = setTimeout(() => {
      setAddMissionSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(closeAlertTimer);
    };
  }, []);

  return (
    <>
      {addMissionSuccess && (
        <Alert severity="success" onClose={() => setAddMissionSuccess(false)}>
          Mission Added Successfully.
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
                Add Mission
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddMission;
