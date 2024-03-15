
import { TextField, Button,Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./AddSpeaker.css";

function AddSpeaker() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    topic: "",
    date: "",
  });

  //   const adminId = "65e81924dd6bb71adae628da";

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = new URL(`http://localhost:3001/admin/speaker`);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
          setMessage(
            `Error Occured, Please! Try again Later || "An unknown error occurred."
            }`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccessMessage("Speaker Added successfully.");

        setFormData({
          name: "",
          designation: "",
          location: "",
          topic: "",
          date: "",
        });
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {successMessage && (
        <Typography
          variant="body2"
          style={{ color: "green", textAlign: "center" }}
        >
          {successMessage}
        </Typography>
      )}

      <form className="formContainer" onSubmit={handleSubmit}>
        <TextField
          className="formField"
          label="Name"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          className="formField"
          label="Designation"
          variant="outlined"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className="formField"
          label="Location"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          className="formField"
          name="topic"
          label="Topic"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.topic}
          onChange={handleChange}
        />
        <TextField
          className="formField"
          label="Date"
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <Button className="submitButton" type="submit" variant="contained">
          Add Speaker
        </Button>
      </form>
    </div>
  );
}

export default AddSpeaker;
