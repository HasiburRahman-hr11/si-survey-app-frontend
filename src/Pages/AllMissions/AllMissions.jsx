import React, { useContext, useEffect, useState } from "react";
import AdminBar from "../../Components/AdminBar/AdminBar";
import { Box, Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import EditMission from "../../Components/EditMission/EditMission";
import DeleteMission from "../../Components/DeleteMission/DeleteMission";
import AddMission from "../../Components/AddMission/AddMission";
import { MissionContext } from "../../Context/MissionContext";

export const AllMissions = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddMission, setOpenAddMission] = useState(false);
  const [editMissionData, setEditMissionData] = useState({});
  const [deleteMissionId, setDeleteMissionId] = useState("");

  const { missions, getAllMissions, loadingMissions } =
    useContext(MissionContext);

  const handleOpenEdit = (missionData) => {
    if (missionData.title) {
      setEditMissionData(missionData);
      setOpenEdit(true);
    }
  };
  const handleOpenDelete = (missionId) => {
    setDeleteMissionId(missionId);
    setOpenDelete(true);
  };
  const handleOpenAddMission = () => {
    setOpenAddMission(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleCloseAddMission = () => setOpenAddMission(false);

  useEffect(() => {
    getAllMissions();
  }, []);
  return (
    <>
      <AdminBar />
      {/* Edit Mission Modal */}
      <EditMission
        openModal={openEdit}
        handleCloseModal={handleCloseEdit}
        missionData={editMissionData}
      />

      {/* Delete Mission Modal */}
      <DeleteMission
        openModal={openDelete}
        handleCloseModal={handleCloseDelete}
        missionId={deleteMissionId}
      />

      {/* Add Mission Modal */}
      <AddMission
        openModal={openAddMission}
        handleCloseModal={handleCloseAddMission}
      />

      <Box sx={{ py: "4rem" }}>
        <Container maxWidth="xl">
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
              <Box
                sx={{
                  width: "max-content",
                  margin: "30px auto",
                }}
              >
                {!loadingMissions ? (
                  " "
                ) : (
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={handleOpenAddMission}
                  >
                    Add New Mission
                  </Button>
                )}
              </Box>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "50px",
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{
                    fontFamily: '"Cormorant", serif',
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  All Missions
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={handleOpenAddMission}
                  >
                    Add New Mission
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "7px",
                  boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
              >
                <Table
                  sx={{ width: "100%", maxWidth: "100%" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Serial</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Total participants</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {missions.map((mission, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>{mission.title}</TableCell>
                        <TableCell align="center">
                          {mission?.participants?.length}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: `${mission.isOpen ? "green" : "red"}` }}
                        >
                          {mission.isOpen ? "Open" : "Closed"}
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                borderRadius: "50%",
                                transition: "all 0.5s ease",
                                "&:hover": { backgroundColor: "#B5E9F9" },
                              }}
                              onClick={() => handleOpenEdit(mission)}
                            >
                              <EditIcon />
                            </Box>
                            <Box
                              sx={{
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                borderRadius: "50%",
                                transition: "all 0.5s ease",
                                "&:hover": { backgroundColor: "#F3D2DD" },
                              }}
                              onClick={() => handleOpenDelete(mission._id)}
                            >
                              <DeleteOutlineIcon />
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};
