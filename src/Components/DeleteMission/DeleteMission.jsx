import { Alert, Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DeleteMission = ({ openModal, handleCloseModal, missionId }) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const handleDeleteMission = () => {
    setDeleteSuccess(true);
    handleCloseModal();
  };

  useEffect(() => {

    // Close Alert after 5 seconds
    let closeAlertTimer = setTimeout(() => {
      setDeleteSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(closeAlertTimer);
    };
  }, [missionId]);
  return (
    <>
      {deleteSuccess && (
        <Alert severity="success" onClose={() => setDeleteSuccess(false)}>
          Mission (Id:{missionId}) Deleted Successfully.
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
              Delete
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
