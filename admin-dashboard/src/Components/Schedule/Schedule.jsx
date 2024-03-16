

import React,{useState , useEffect} from "react";
import { scheduleData } from "../../Data/ScheduleData";
import { Button, Card, CardContent, Typography, colors, TextField, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, Modal,Box,
 
  Grid, } from "@mui/material";
import "./Schedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClockFour, faDisplay, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Schedule() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndTime] = useState("");
  
  const [fetchEventScheduleData, setFetchEventScheduleData] = useState([]);

 
  const handleAddEvent = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }


  
  useEffect(() => {
    const fetchEventScheduleData = async () => {
      try {
        const response = await fetch("http://localhost:3001/admin/event-schedule");
        const data = await response.json();
        setFetchEventScheduleData(data.data);
      } catch (error) {
        console.error("Error fetching speaker data:", error);
      }
    };

    fetchEventScheduleData();
  }, []);


  return (
    <div>
      <div style={{display: 'flex'}}>
      <h2 className="schedule-heading">Event Schedule</h2>
      {/* <Button><FontAwesomeIcon icon={faAdd}/></Button> */}

      </div>
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
            Add Event 
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Title"
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
                  label="Time"
                  fullWidth
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="End Time"
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

      <div className="card-container">

        {fetchEventScheduleData.map((event, _id) => (
          <Card key={_id} className="event-card">
            <CardContent>
            {_id === 0 && <FontAwesomeIcon icon={faAdd} className="schedule-button" onClick={handleAddEvent}/>}
              <div className="date-div">{formatDate(event.date)}</div>
              <Typography variant="h5" className="schedule-h5">{event.title}</Typography>
              {/* <Typography variant="body1">Date: {event.date}</Typography> */}
              <div style={{display: 'flex', marginTop:'10px'}}>
                <Typography variant="body1" className="schedule-div-typo" style={{marginRight:'70px'}}><FontAwesomeIcon icon={faClockFour} style={{color:'rgb(252, 178, 67', marginRight:'5px'}}/>{event.time}</Typography>
                <Typography variant="body1" className="schedule-div-typo">
                 <FontAwesomeIcon icon={faLocationDot} style={{color:'rgb(252, 178, 67)', marginRight:'5px'}}/> {event.location}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Schedule;