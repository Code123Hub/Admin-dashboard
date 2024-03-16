
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { testimonialData } from "../../Data/Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

function TestimonialContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [fetchedTestimonialData, setFetchedTestimonialData] = useState([]);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await fetch("http://localhost:3001/admin/testimonial");
        const data = await response.json();
        setFetchedTestimonialData(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching speaker data:", error);
      }
    };

    fetchTestimonialData();
  }, []);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    // You can add the testimonial to your data or send it to a server
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div style={{
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      height: "100vh",
      border: "10px",
      borderRadius: "10px",
      padding: "10px",
    }}>
      <h2>Testimonials</h2>
      <Button
        variant="contained"
        color="primary"
        style={{ position: "absolute", top:20, right: 0, margin: "10px" , }}
        onClick={handleAddButtonClick}
      >
        Add
      </Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Testimonial
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Location"
                  fullWidth
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Topic"
                  fullWidth
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="date"
                  fullWidth
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Speaker Name"
                  fullWidth
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <TableContainer style={{ borderRadius: "10px", marginTop: "10px" }}>
        <Table>
        <TableHead>
            <TableRow>
              
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Name</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Speaker Name</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Topic</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>Description</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>location</TableCell>
              <TableCell style={{ textAlign: "left", color: "#2d3748", fontSize: "1rem", backgroundColor: "#e2e8f0" }}>date</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
          
            {Array.isArray(fetchedTestimonialData) &&
              fetchedTestimonialData.map((testimonial,index) => (
                <TableRow style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#e2e8f0" }}>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.name}</TableCell>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.speakerName}</TableCell>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.topic}</TableCell>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.description}</TableCell>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.location}</TableCell>
                  <TableCell  style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>{testimonial.date}</TableCell>
                
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
     
    </div>
  );
}

export default TestimonialContent;
