import React, { useState } from "react";
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

const missions = [
  {
    _id: "001",
    title: "Mission Title 1",
    participants: 25,
    description: "Dummy Description",
    isOpen: true,
  },
  {
    _id: "002",
    title: "Mission Title 2",
    participants: 20,
    description: "Dummy Description",
    isOpen: false,
  },
  {
    _id: "003",
    title: "Mission Title 3",
    participants: 31,
    description: "Dummy Description",
    isOpen: true,
  },
  {
    _id: "004",
    title: "Mission Title 4",
    participants: 26,
    description: "Dummy Description",
    isOpen: true,
  },
  {
    _id: "005",
    title: "Mission Title 5",
    participants: 32,
    description: "Dummy Description",
    isOpen: true,
  },
  {
    _id: "005",
    title: "Mission Title 6",
    participants: 46,
    description: "Dummy Description",
    isOpen: false,
  },
  {
    _id: "006",
    title: "Mission Title 7",
    participants: 39,
    description: "Dummy Description",
    isOpen: true,
  },
];

export const AllMissions = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddMission, setOpenAddMission] = useState(false);
  const [editMissionData, setEditMissionData] = useState({});
  const [deleteMissionId, setDeleteMissionId] = useState("");

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
  const handleOpenAddMission = (missionId) => {
    setOpenAddMission(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleCloseAddMission = () => setOpenAddMission(false);
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
      <AddMission openModal={openAddMission} handleCloseModal={handleCloseAddMission} />

      <Box sx={{ py: "4rem" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", mb:"50px" }}>
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
              <Button variant="contained" size="medium" onClick={handleOpenAddMission}>
                Add Mission
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{mission.title}</TableCell>
                    <TableCell align="center">{mission.participants}</TableCell>
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
        </Container>
      </Box>
    </>
  );
};
