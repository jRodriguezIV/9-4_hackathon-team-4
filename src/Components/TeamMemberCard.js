import React from "react";
import githubLogo from "../assets/github.jpeg";
import linkedinLogo from "../assets/linkedin.png";

export default function TeamMemberCard({ member }) {
  return (
    <div className="member-card">
      <h3>{member.name}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={member.photo}
          alt={member.name}
          style={{
            width: '150px',
            height: '170px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>

      <p>{member.bio}</p>
      <div className="links-container">
        <div className="github-container">
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" width={40} />
          </a>
        </div>

        <div className="linkedin-container">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn Logo" width={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

