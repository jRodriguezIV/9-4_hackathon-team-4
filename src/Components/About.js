
import React from "react";
import "./About.css";
import githubLogo from "../assets/github.jpeg";
import linkedinLogo from "..//assets/linkedin.png";
import JosephPhoto from "..//assets/Joseph.jpg"
import RaydelysPhoto from "..//assets/Raydelys.jpg"
import JinseokPhoto from "..//assets/Jinseok.jpg"
import jacquelinePhoto from "..//assets/jacqueline.jpg"
import MarkPhoto from "..//assets/Mark.jpg"


export default function About({ mode }) {

    const teamMembers = [
        {
            name: "Joseph Rodriquez",
            photo: JosephPhoto,
            bio: `I am Joseph Rodriguez, a compassionate and driven junior full stack developer. With a passion for technology and empathy for users, I excel in creating innovative solutions. Continuously seeking growth and learning, I aim to make a positive impact in the ever-changing world of software development.`,
            github: "https://github.com/jRodriguezIV",
            linkedin: "https://www.linkedin.com/in/josephrodrigueziv/",
        },

        {
            name: "Mark Roberston",
            photo: MarkPhoto,
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate. Besides coding, I enjoy movies, Formula 1 racing, music, travel, and spending time with my German Shepherd.

            I'm excited to learn new languages like Python, C++, C#, etc., for personal and professional growth. My first personal project is designing a quantitative trading algorithm to run through an API to a trading platform.

            I have experience in the financial markets and would enjoy working for a start-up or a large financial firm.`,

            github: "https://github.com/MarkRobertson67",
            linkedin: "https://www.linkedin.com/in/mark-robertson-ny-uk/",
        },

        {
            name: "Raydelys Morrobel Reyes",
            photo: RaydelysPhoto,
            bio: `Presently, I hold the title of a Full Stack Web Development Fellow at Pursuit, a prestigious 12-month software engineering fellowship with funding from Google. With an acceptance rate of just 9%, this program has produced successful graduates who secured positions as developers in prominent companies like Pinterest, JP Morgan, Citi, Spotify, and Blackstone.

           My ultimate goal is to become a skilled software engineer capable of tackling real-world challenges.`,
            github: "https://github.com/arerimr",
            linkedin: "https://www.linkedin.com/in/raydelysmr",
        },

        {
            name: "Jinseok Jung",
            photo: JinseokPhoto,
            bio: `Passionate, driven, and detail-oriented Software Engineer with a strong commitment to continuous learning and professional growth. Currently pursuing excellence in tech through the intensive Pursuit fellowship, an exclusive program with a remarkable 9% acceptance rate. Growing my personal brand and exploring new programming languages.`,
            github: "https://github.com/pjungjs",
            linkedin: "https://www.linkedin.com/in/jinseok-jung/",
        },

        {
            name: "Jacqueline Pasaoa",
            photo: jacquelinePhoto,
            bio: `Jacqueline is full stack developer that studied under Pursuit. She underwent comprehensive training to master both front-end and back-end technologies. Throughout the program, she gained proficiency in various programming languages, databases, and frameworks to build complete web applications. She loves to travel, eat ice cream, and wants to learn more coding languages. And hopes to add more cities to travel to in the near future.`,
            github: "https://github.com/jkpasaoa",
            linkedin: "https://www.linkedin.com/in/jacquelinepasaoa/",
        },
    ];


    return (
        <div className="about-wrapper">
            <br />

            <div className="about"><br /><br />
                <h1 style={{ fontWeight: 'bold' }}>About Our Project</h1>

                <br />
                {/* <div className="scribe">
                <a href="https://scribehow.com/shared/How_to_use_the_Luxury_Rides_App__Sg9wWxUdQMW3_RqAsx6OJQ" target="_blank" rel="noopener noreferrer">
                <h1 style={{ fontSize: '20px' }}>Click here to learn how to use this App</h1>
                </a>
                </div><br /> */}

                {/* <div className="AiGirl">
                <a href="https://app.hourone.ai/player/1e279eef158e41c3a9ec67a381841bce" target="_blank" rel="noopener noreferrer">
                <h1 style={{ fontSize: '20px' }}>Too busy to read? Click here and my assistant will describe the App to you.</h1>
                </a>
                </div><br /> */}

                <p>
                    Introducing "Our ACCESS APP: The Ultimate APP for people to gain acccess"

                    Its a great App
                </p>
                <p>
                    Best App ever
                </p>
                <p>
                    The front-end of our application is built on React, offering a seamless and intuitive interface for browsing, exploring.
                </p>
                <p>
                    No back-end.
                </p>
                <p>
                    Some blurb
                </p>
                <p>
                    Some more blurb
                </p>
                <p>
                    Final blurb
                </p>
                <em><p>(Please see readme.md for additional information)</p></em>

            </div>

            <div className="team">
                <h1>Meet the Team</h1>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="member-card">
                            <h3>{member.name}</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    style={{
                                        width: '250px',
                                        height: '300px',
                                        borderRadius: '50%', // Creates an oval shape
                                        objectFit: 'cover', // Maintain aspect ratio and cover entire area
                                    }}
                                />
                            </div>

                            <p>{member.bio}</p>
                            <div className="links-container">
                                <div className="github-container">
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <img src={githubLogo} alt="GitHub Logo" width={60} h />
                                    </a>
                                </div>

                                <div className="linkedin-container">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinLogo} alt="LinkedIn Logo" width={60} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="wireframe">
                    <a href="https://www.figma.com/file/keZQ8tNFoaDTLrjmMHCgcQ/Team-4---Project-Outline?type=whiteboard&node-id=0%3A1&t=mwdn9wrvj4xWefgy-1" target="_blank" rel="noopener noreferrer">
                        <h1>Figma Wireframe</h1>
                    </a>
                </div>

                <div className="trello-board">
                    <a href="https://trello.com/b/Aaww8Be5/94-team-4-hackathon" target="_blank" rel="noopener noreferrer">
                        <h1>Trello Board</h1>
                    </a>
                </div>
            </div>
        </div>
    );
}