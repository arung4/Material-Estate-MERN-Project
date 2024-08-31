import React from "react";
import { Jane, Karry, Lisa, Mike, Ricky, Smith } from "../../Images/images";
import "./Agents.scss"; // Import the Sass file

const agentsData = [
  {
    name: "Lisa Mayden",
    experience: "10 years",
    email: "lisamayden@materialestate.com",
    phone: "+91 9664518901",
    image: Lisa,
  },
  {
    name: "Jane Smith",
    experience: "8 years",
    email: "janesmith@materialestate.com",
    phone: "+91 9357818901",
    image: Jane,
  },
  {
    name: "Mike Hough",
    experience: "20 years",
    email: "janesmith@materialestate.com",
    phone: "+91 8994518901",
    image: Mike,
  },
  {
    name: "Karry Wagh",
    experience: "12 years",
    email: "janesmith@materialestate.com",
    phone: "+91 6254518988",
    image: Karry,
  },
  {
    name: "Smith Anderson ",
    experience: "15 years",
    email: "janesmith@materialestate.com",
    phone: "+91 7054517900",
    image: Smith,
  },
  {
    name: "Ricky ketty",
    experience: "4 years",
    email: "janesmith@materialestate.com",
    phone: "+91 9853512201",
    image: Ricky,
  },
];

const Agents = () => {
  return (
    <div className="agents-container">
      <h1>Our Agents</h1>
      <p>
        Meet our experienced team of agents who are here to help you find your
        dream property, houses, apartments and many more.
      </p>
      <div className="agents-list">
        {agentsData.map((agent, index) => (
          <div className="agent-card" key={index}>
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <h2>{agent.name}</h2>
            <p>Experience: {agent.experience}</p>
            <div className="contact-info">
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
