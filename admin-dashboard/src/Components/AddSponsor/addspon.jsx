



import React, { useState } from 'react';
import {TextField, Button} from '@mui/material';


function AddSpon() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    time: '',
    email: '',
    location: '',
    id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to an API or perform any other action
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      amount: '',
      time: '',
      email: '',
      location: '',
      id: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          name="amount"
          label="Amount"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          name="time"
          label="Time"
          value={formData.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          name="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          name="id"
          label="ID"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
}

export default AddSpon;