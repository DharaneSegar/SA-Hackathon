import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ViewUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from your server
    axios
      .get("http://localhost:4000/api/getWalkInData") // Replace with your API endpoint
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1d93bc",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <div>
        <br />
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold">Walk In List</h2>
        </div>

        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Hotel Code</StyledTableCell>
                <StyledTableCell align="right">Hotel Name</StyledTableCell>
                <StyledTableCell align="right">Check In Date</StyledTableCell>
                <StyledTableCell align="right">Check Out Date</StyledTableCell>
                <StyledTableCell align="right">No of Rooms</StyledTableCell>
                <StyledTableCell align="right">
                  Special Requests
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">{user.phone}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.hotel_code}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.hotel_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.checkin_date}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.checkout_date}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.no_rooms}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.special_requests}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <br />
    </>
  );
};

export default ViewUsers;
