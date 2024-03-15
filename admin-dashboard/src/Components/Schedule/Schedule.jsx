

import React,{useState} from "react";
import { scheduleData } from "../../Data/ScheduleData";
import { Button, Card, CardContent, Typography, colors, TextField, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle } from "@mui/material";
import "./Schedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faClockFour, faDisplay, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Schedule() {

  const [showModal, setShowModal] = useState(false);

  const handleAddEvent = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };  
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
      <h2 className="schedule-heading">Event Schedule</h2>
      {/* <Button><FontAwesomeIcon icon={faAdd}/></Button> */}

      </div>
      

      <div className="card-container">

        {scheduleData.map((event, _id) => (
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