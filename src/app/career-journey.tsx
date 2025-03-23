import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
export default function CareerJourney() {
   const IntershipKusumaBuana = [
      "Learn custom addon Odoo ERP.",
      "Developing tree tagging addon for product traceability on Odoo ERP (Python, XML, Javascript).",
      "Developing Backend application using Adonis.Js for a Hompimpaa application which is an early childhood talent assessment application",
   ];
   const kusumaBuana = [
      "Developing an application for a company engaged in the field of Ant Sugar, this application is to manage product traceability from farmers to the company, consisting of Web, Mobile, Back End. (Vuejs, Adonis js, Flutter, MySql).",
      "Using the Scrum framework in application development in a company engaged in the management of Ant Sugar. (Scrum)",
      "Developing BESTIE (Breeze Support Ticketing System) application which is an application to help customers in making complaints and checking related issues that arise when using breezelabs products. The application is based on Odoo and telegram bot, (Odoo, Python, XML, PostgreSql).",
   ];
   const Tristar = [
      "Writing and managing server-side functions using programming languages such as Go, or Node.js, to run business logic such as data validation, complex calculations, or user session management.",
      "Designing relational database schemas using PostgreSQL or MySQL, ensuring data normalization, and writing efficient SQL queries for CRUD (Create, Read, Update, Delete) operations.",
      "Developing RESTful API or GraphQL for communication between frontend and backend.",
      "Improving Performance and Scalability, implementing caching using Redis and optimizing logic operations and queries on existing backend APIs.",
      "Defining API contracts using tools like Postman or Swagger, ensuring data compatibility between backend and frontend.",
   ];

   return (
      <div id="Career" className="flex flex-col items-center justify-center bg-gray-800 ">
         {/* <Typography>Career Journey </Typography> */}
         <p className="text-3xl p-5">Career Journey</p>
         <Timeline position="alternate">
            <TimelineItem>
               <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="white">
                  <Typography variant="h6" component="span" color="white">
                     September 2021 - Januari 2022
                  </Typography>
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent
                  sx={{
                     py: "12px",
                     px: 2,
                     // mx:"12px",
                     // bgcolor: "background.paper",
                     boxShadow: 3,
                     borderRadius: 2,
                     // color: "black",
                     // width: "60vh",
                  }}>
                  <Typography variant="h6" component="span" color="white">
                     Internship CV. Kusuma Buana
                  </Typography>
                  <List>
                     {IntershipKusumaBuana.map((item, index) => (
                        <ListItem key={index}>
                           <ListItemIcon>
                              <TaskAltIcon sx={{ color: "white" }} />
                           </ListItemIcon>
                           <ListItemText primary={item} />
                        </ListItem>
                     ))}
                  </List>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="white
                  ">
                  <Typography variant="h6" component="span" color="white">
                     Februari 2022- November 2022
                  </Typography>
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ py: "12px", px: 2, boxShadow: 3, borderRadius: 2 }}>
                  <Typography variant="h6" component="span">
                     CV. Kusuma Buana
                  </Typography>
                  <List>
                     {kusumaBuana.map((item, index) => (
                        <ListItem key={index}>
                           <ListItemIcon>
                              <TaskAltIcon sx={{ color: "white" }} />
                           </ListItemIcon>
                           <ListItemText primary={item} />
                        </ListItem>
                     ))}
                  </List>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
                  <Typography variant="h6" component="span" color="white">
                     Desember 2022- Sekarang
                  </Typography>
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ py: "12px", px: 2, boxShadow: 3, borderRadius: 2 }}>
                  <Typography variant="h6" component="span">
                     PT. TRISTAR SURYA GEMILANG
                  </Typography>
                  <List>
                     {Tristar.map((item, index) => (
                        <ListItem key={index}>
                           <ListItemIcon>
                              <TaskAltIcon sx={{ color: "white" }} />
                           </ListItemIcon>
                           <ListItemText primary={item} />
                        </ListItem>
                     ))}
                  </List>
               </TimelineContent>
            </TimelineItem>
         </Timeline>
      </div>
   );
}
