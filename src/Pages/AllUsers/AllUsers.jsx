import React from "react";
import AdminBar from "../../Components/AdminBar/AdminBar";
import { Box, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const users = [
  { name: "Username 1", email: "useremail1@example.com" },
  { name: "Username 2", email: "useremail2@example.com" },
  { name: "Username 3", email: "useremail3@example.com" },
  { name: "Username 4", email: "useremail4@example.com" },
  { name: "Username 5", email: "useremail5@example.com" },
  { name: "Username 6", email: "useremail6@example.com" },
];

export const AllUsers = () => {
  return (
    <>
      <AdminBar />

      <Box sx={{ py: "4rem" }}>
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontFamily: '"Cormorant", serif',
            fontWeight: "700",
            mb: "50px",
            textAlign: "center",
          }}
        >
          All Users
        </Typography>
        <Container maxWidth="xl">
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
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
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
