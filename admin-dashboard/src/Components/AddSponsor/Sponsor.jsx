




import React, { useState } from "react";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { transactionData } from '../../Data/Transaction'
import { useNavigate } from 'react-router-dom';


function AddSponsor() {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false); // State to control form visibility

   
    const handleCloseForm = () => {
      setShowForm(false); // Close the form
    };

    const handleAddSponsorClick = (e) => {
      e.preventDefault(); // Prevent default anchor tag behavior
      setShowAddSponsor(true); 
      setContactQueryContent(false);
      setTestimonialContent(false);
      setEventContent(false);
      setShowDashboardContent(false);
      setScheduleContent(false);
      setTransactionContent(false);
    };
    
  return (
    <div
      style={{
        height: "100vh",
        border: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <h2>Sponsors Detail</h2>
        </Grid>
        <Grid item>
        <Button
        variant="contained"
        color="primary"
        onClick={handleAddSponsorClick}
        style={{ marginBottom: '20px' }}
      >
        Add Sponsor
      </Button>
        </Grid>
      </Grid>
      {showForm && <SponsorForm handleCloseForm={handleCloseForm} />}
      
      <TableContainer style={{ borderRadius: "10px", marginTop: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Sponsor id</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Name</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>email</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>location</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((data, index) => (
              <TableRow style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#e2e8f0" }}>
                <TableCell style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{data._id}</TableCell>
                <TableCell style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{data.name}</TableCell>
                <TableCell style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{data.modeOfPayment}</TableCell>
                <TableCell style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{data.ticket_id}</TableCell>
                <TableCell style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{data.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AddSponsor;