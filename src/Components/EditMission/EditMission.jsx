import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

const EditMission = ({ openModal, handleCloseModal, missionData }) => {

  const [title, setTitle] = useState(missionData?.title || "");
  const [description, setDescription] = useState(
    missionData?.description || ""
  );
  const [isOpen, setIsOpen] = useState(missionData?.isOpen || true);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleSubmit = () => {
    setUpdateSuccess(true);
    handleCloseModal();
  };

  useEffect(() => {
    setTitle(missionData?.title);
    setDescription(missionData?.description);
    setIsOpen(missionData?.isOpen);

    // Close Alert after 5 seconds
    let closeAlertTimer = setTimeout(() => {
      setUpdateSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(closeAlertTimer);
    };
  }, [missionData]);
  return (
    <>
      {updateSuccess && (
        <Alert severity="success" onClose={() => setUpdateSuccess(false)}>
          Mission Updated Successfully.
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
            Edit Mission
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
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditMission;
