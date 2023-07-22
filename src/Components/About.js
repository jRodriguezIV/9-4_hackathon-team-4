
import React from "react";
import "./About.css";
import githubLogo from "../assets/github.jpeg";
import linkedinLogo from "..//assets/linkedin.png";


export default function About({ mode }) {

    const teamMembers = [
        {
            name: "Joseph Rodriquez",
            photo: require("../assets/Joseph.jpg").default,
            bio: `I am Joseph Rodriguez, a compassionate and driven junior full stack developer. With a passion for technology and empathy for users, I excel in creating innovative solutions. Continuously seeking growth and learning, I aim to make a positive impact in the ever-changing world of software development.`,
            github: "https://github.com/jRodriguezIV",
            linkedin: "https://www.linkedin.com/in/josephrodrigueziv/",
        },

        {
            name: "Mark Roberston",
            photo: require("../assets/Mark.jpg").default,
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.

            Being a Pursuit Fellow will give me the foundation to go on and learn new and exciting languages such as Python, C++, C# et al. that I would like to use both personally and professionally. My first personal project will be to design and implement a quantitative trading algorithm that I can run through an API to a trading platform.
            
            I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.`,
            github: "https://github.com/MarkRobertson67",
            linkedin: "https://www.linkedin.com/in/mark-robertson-ny-uk/",
        },

        {
            name: "Raydelys Morrobel Reyes",
            photo: require("../assets/Raydelys.jpg").default,
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.`,
            github: "https://github.com/arerimr",
            linkedin: "https://www.linkedin.com/in/raydelysmr",
        },

        {
            name: "Jinseok Jung",
            photo: require("../assets/Jinseok.jpg").default,
            bio: `Passionate, driven, and detail-oriented Software Engineer with a strong commitment to continuous learning and professional growth. Currently pursuing excellence in tech through the intensive Pursuit fellowship, an exclusive program with a remarkable 9% acceptance rate. Growing my personal brand and exploring new programming languages.`,
            github: "https://github.com/pjungjs",
            linkedin: "https://www.linkedin.com/in/jinseok-jung/",
        },

        {
            name: "Jacqueline Pasaoa",
            photo: require("../assets/jacqueline.jpg").default,
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
                            <img src={member.photo} alt={member.name} width={150} height={150} />
                            <p>{member.bio}</p>
                            <div className="links-container">
                                <div className="github-container">
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                borderRadius: '50%', // Creates an oval shape
                                                objectFit: 'cover', // Maintain aspect ratio and cover entire area
                                            }}
                                        />
                                    </a>
                                </div>

                                <div className="githubLogo-container">
                                    <a href={member.githubLogo} target="_blank" rel="noopener noreferrer">
                                        <img src={githubLogo} alt="Github Logo" width={80} height={26} />
                                    </a>
                                </div>

                                <div className="linkedin-container">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinLogo} alt="LinkedIn Logo" width={80} height={26} />
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