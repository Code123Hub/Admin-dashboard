import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box, TextField, Grid } from '@mui/material';
import { testimonialData } from '../../Data/Testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

function TestimonialContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [topic, setTopic] = useState('');
  const [speakerName, setSpeakerName] = useState('');

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
    <div style={{ position: 'relative' }}>
      <h2>Testimonials</h2>
      <Button
        variant="contained"
        color="primary"
        style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}
        onClick={handleAddButtonClick}
      >
        Add
      </Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>Add Testimonial</Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Location" fullWidth value={location} onChange={(e) => setLocation(e.target.value)} required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Topic" fullWidth value={topic} onChange={(e) => setTopic(e.target.value)} required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} required />
              </Grid>
              <Grid item xs={6}>
                <TextField type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} required />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Speaker Name" fullWidth value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} required />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Submit</Button>
          </form>
        </Box>
      </Modal>
      {testimonialData.map((testimonial) => (
        <Card key={testimonial._id} className="testimonial-card">
          <CardContent>
            <Typography variant="h6">{testimonial.ticketData}</Typography>
            <Typography variant="body1">Price: {testimonial.price}</Typography>
            <Typography variant="body1">Location: {testimonial.location}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TestimonialContent;