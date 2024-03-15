

import React, { useState, useEffect } from "react";
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
  faEdit,
  faEye,
  faPaperPlane,
  faQuestionCircle,
  faTag,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { transactionData } from "../../Data/Transaction";

function AllSpeaker() {
  const [speakerData, setSpeakerData] = useState(null);
  const [editSpeaker, setEditSpeaker] = useState(null);

  useEffect(() => {
    const fetchSpeakerData = async () => {
      try {
        const response = await fetch("http://localhost:3001/admin/speaker");
        const data = await response.json();
        setSpeakerData(data.data);
      } catch (error) {
        console.error("Error fetching speaker data:", error);
      }
    };

    fetchSpeakerData();
  }, []);

  const handleEdit = (speaker) => {
    setEditSpeaker(speaker);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/admin/speaker/${adminId}/${speakerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editSpeaker),
        }
      );

      if (response.ok) {
        console.log("Speaker updated successfully");
        // Update speakerData state or fetch data again to reflect changes
      } else {
        console.error("Failed to update speaker");
      }
    } catch (error) {
      console.error("Error updating speaker:", error);
    }
  };

  const handleDelete = async (speaker) => {
    try {
      const response = await fetch(
        `http://localhost:3001/admin/speaker/${speaker._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Speaker deleted successfully");
        // Update speakerData state or fetch data again to reflect changes
      } else {
        console.error("Failed to delete speaker");
      }
    } catch (error) {
      console.error("Error deleting speaker:", error);
    }
  };

  return (
    <div>
      <h2>Speaker Detail</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {speakerData &&
              speakerData.map((speaker) => (
                <TableRow key={speaker._id}>
                  <TableCell>{speaker.name}</TableCell>
                  <TableCell>
                    {editSpeaker && editSpeaker._id === speaker._id ? (
                      <TextField
                        value={editSpeaker.designation}
                        onChange={(e) =>
                          setEditSpeaker({ ...editSpeaker, designation: e.target.value })
                        }
                      />
                    ) : (
                      speaker.designation
                    )}
                  </TableCell>
                  <TableCell>{speaker.location}</TableCell>
                  <TableCell>{speaker.date}</TableCell>
                  <TableCell>{speaker.topic}</TableCell>
                  <TableCell>
                    {editSpeaker && editSpeaker._id === speaker._id ? (
                      <Button onClick={handleSave}>Save</Button>
                    ) : (
                      <Button onClick={() => handleEdit(speaker)}>
                        <FontAwesomeIcon icon={faEdit} style={{ marginRight: "5px" }} />
                        Edit
                      </Button>
                    )}
                    <Button onClick={() => handleDelete(speaker)}>
                      <FontAwesomeIcon icon={faTrashAlt} style={{ marginLeft: "10px" }} />
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

export default AllSpeaker;