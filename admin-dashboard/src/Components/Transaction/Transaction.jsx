


import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  TextField,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
   Modal,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faPaperPlane,
  faQuestionCircle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { transactionData } from '../../Data/Transaction'

function Transaction() {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        border: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {/* .schedule-heading{
    text-align: left;
    margin-left: 50px; */}
  
      <h2 style={{marginLeft:'10px'}}>Transaction Detail</h2>
      {/* <FormControl style={{ width: '500px', height: '500px', padding: '10px' }}>
        <Select
          label="Email"
          variant="outlined"
          defaultValue=""
        >
          <MenuItem value="" disabled>Select an Email</MenuItem>
          <MenuItem value="email1@example.com">email1@example.com</MenuItem>
          <MenuItem value="email2@example.com">email2@example.com</MenuItem>
          <MenuItem value="email3@example.com">email3@example.com</MenuItem>
        </Select>
        <TextField
          label="Message"
          placeholder="Type your Message Here"
          variant="outlined"
          
          style={{ marginTop: '20px' , marginBottom: '30px',height:'20px'}}
          
        />
        <Button variant="contained" color="primary" style={{ marginTop: '30px' ,  width: '30%', justifyContent:'center'}}>
          send
        </Button>
      </FormControl> */}

      <TableContainer style={{ borderRadius: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Transaction id
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Mode Of Payment
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Ticket
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                style={{
                  textAlign: "left",
                  color: "#2d3748",
                  fontSize: "1rem",
                  backgroundColor: "#e2e8f0",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((data, index) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#e2e8f0",
                }}
              >
                
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data._id}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.name}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.modeOfPayment}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.ticket_id}
                </TableCell>
                <TableCell
                  tyle={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  {data.price}
                </TableCell>
               

                <TableCell
                  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}
                >
                  <Button style={{ fontSize: "12px" }}   >
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     

  

     
    </div>
  );
}

export default Transaction