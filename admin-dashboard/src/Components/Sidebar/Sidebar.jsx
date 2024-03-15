


import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlgolia,
  faCcDiscover,
  faCloudsmith,
  faTeamspeak,
} from "@fortawesome/free-brands-svg-icons";
import "./Sidebar.css";
import ad from '../../assets/admin.jpeg';
import DashboardContent from "../DashboardContent/DashboardContent";
import Event from "../Event/Event";
import Schedule from "../Schedule/Schedule";
import Transaction from "../Transaction/Transaction";
import TestimonialContent from "../Testimonial/TestimonialContent";
import ContactQuery from "../ContactQuery/ContactQueryContent";
import Sponsor from "../AddSponsor/Sponsor";
import { useNavigate} from 'react-router';  
import { faCalendarAlt, faCalendarCheck, faContactBook, faListAlt, faQuestionCircle, faSignOutAlt, faTasksAlt, faTh, faThLarge, faThList, faUserAlt, faUsers, faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import AllSpeaker from "../Speaker/AllSpeaker";
import AddSpeaker from "../Speaker/AddSpeaker";
import ContactDetail from "../ContactDetail/ContactDetail";

function Sidebar() {
  // const navigate = useNavigate();
  const [showDashboardContent, setShowDashboardContent] = useState(true);
  const [eventContent, setEventContent] = useState(false);
  const [scheduleContent, setScheduleContent] = useState(false);
  const [transactionContent, setTransactionContent] = useState(false);
  const [testimonialContent, setTestimonialContent] = useState(false);
  const [contactQueryContent, setContactQueryContent] = useState(false);
  const [showSponsor, setShowSponsor] = useState(false); 
  const [allSpeaker, setAllSpeaker] = useState(false);
  const [speakerData, setSpeakerData] = useState(null);
  const [addSpeaker, setAddSpeaker] = useState(false);
  const [contactDetail, setContactDetail] = useState(false);


  const handleDashboardClick = () => {
    setShowDashboardContent(true);
    setEventContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);
    setTransactionContent(false);
    setTestimonialContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false)
  };

  const handleEventClick = () => {
    setEventContent(true);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);
    setTestimonialContent(false);
    setTransactionContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false)
  };

  const handleScheduleClick = () => {
    setScheduleContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setContactQueryContent(false);
    setTransactionContent(false);
    setTestimonialContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false);
  };

  const handleTransactionClick = () => {
    setTransactionContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setContactQueryContent(false);
    setTestimonialContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false);
  };

  const handleTestimonialClick = () => {
    setTestimonialContent(true);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setTransactionContent(false);
    setContactQueryContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false);
  };

  const handleContactQueryClick = () => {
    setContactQueryContent(true);
    setTestimonialContent(false);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setTransactionContent(false);
    setShowSponsor(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false);
  };



  const handleLogOut = () => {
    console.log("I'm sure you want to move to home");

    navigate('/')
  };

  const handleSponsor = () => {
    setShowSponsor(true); 
    setContactQueryContent(false);
    setTestimonialContent(false);
    setEventContent(false);
    setShowDashboardContent(false);
    setScheduleContent(false);
    setTransactionContent(false);
    setAllSpeaker(false);
    setAddSpeaker(false);
    setContactDetail(false);
  };

const handleAllSpeakerClick=()=>{

 
  setAllSpeaker(true); 
  setContactQueryContent(false);
  setTestimonialContent(false);
  setEventContent(false);
  setShowDashboardContent(false);
  setScheduleContent(false);
  setTransactionContent(false);
  setShowSponsor(false);
  setAddSpeaker(false);
}


const handleAddSpeakerClick=()=>{
  setAddSpeaker(true);
  setAllSpeaker(false); 
  setContactQueryContent(false);
  setTestimonialContent(false);
  setEventContent(false);
  setShowDashboardContent(false);
  setScheduleContent(false);
  setTransactionContent(false);
  setShowSponsor(false);
  setContactDetail(false);
}

const handleContactDetailClick=()=>{
  setContactDetail(true);
  setAddSpeaker(false);
  setAllSpeaker(false); 
  setContactQueryContent(false);
  setTestimonialContent(false);
  setEventContent(false);
  setShowDashboardContent(false);
  setScheduleContent(false);
  setTransactionContent(false);
  setShowSponsor(false);
}

// useEffect(() => {
//   const fetchSpeakerData = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/admin/speaker');
//       const data = await response.json();
//       console.log(data.data); 
//       setSpeakerData(data.data);
//     } catch (error) {
//       console.error("Error fetching speaker data:", error);
//     }
//   };

//   if (allSpeaker) {
//     fetchSpeakerData();
//   }
// }, [allSpeaker]);

  return (
    <>
      <div className="sidenav">
        <div className="profile-name">
          <img src={ad} alt="" />
        </div>
        <div className="sidebar-item" onClick={handleDashboardClick}>
          <FontAwesomeIcon icon={faThLarge} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Dashboard</a>
        </div>
        <div className="sidebar-item" onClick={handleAllSpeakerClick}>
          <FontAwesomeIcon icon={faUsers} style={{ marginTop: "5px" }} />
          <a href="#dashboard">All Speaker</a>
        </div>
        <div className="sidebar-item" onClick={handleAddSpeakerClick}>
          <FontAwesomeIcon icon={faUserAlt} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Add Speaker</a>
        </div>
        <div className="sidebar-item" onClick={handleScheduleClick}>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Schedule</a>
        </div>
        <div className="sidebar-item" onClick={handleTransactionClick}>
          <FontAwesomeIcon icon={faCcDiscover} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Transaction</a>
        </div>
        <div className="sidebar-item" onClick={handleTestimonialClick}>
          <FontAwesomeIcon icon={faCalendarCheck} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Testimonial</a>
        </div>
        
        <div className="sidebar-item" onClick={handleSponsor}>
          <FontAwesomeIcon icon={faThLarge} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Sponsor</a>
        </div>
        <div className="sidebar-item" onClick={handleContactDetailClick}>
          <FontAwesomeIcon icon={faContactBook} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Contact Detail</a>
        </div>
        <div className="sidebar-item" onClick={handleContactQueryClick}>
          <FontAwesomeIcon icon={faQuestionCircle} style={{ marginTop: "5px" }} />
          <a href="#dashboard">Query Support</a>
        </div>
        <div className="sidebar-item" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginTop: "5px" }} />
          <a href="#dashboard">LogOut</a>
        </div>
       
      </div>
      <div className="sidebar-right">
        {showDashboardContent && <DashboardContent />}
        {eventContent && <Event />}
        {scheduleContent && <Schedule />}
        {transactionContent && <Transaction />}
        {testimonialContent && <TestimonialContent />}
        {contactQueryContent && <ContactQuery />}
        {showSponsor && <Sponsor />}

        {allSpeaker && <AllSpeaker />}
        {addSpeaker && <AddSpeaker/>}
        {contactDetail && <ContactDetail />}
      </div>

    </>
  );
}

export default Sidebar;