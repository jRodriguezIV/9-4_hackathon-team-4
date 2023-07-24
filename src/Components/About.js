import { HiPlayPause, HiStop } from 'react-icons/hi2'
import React from "react";
import "./About.css";
import TeamMemberCard from "./TeamMemberCard";
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
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate. I also enjoy movies, Formula 1, travel, and playing with my German Shepherd.

            With financial markets experience and would enjoy working for a financial firm.`,

            github: "https://github.com/MarkRobertson67",
            linkedin: "https://www.linkedin.com/in/mark-robertson-ny-uk/",
        },

        {
            name: "Raydelys M R",
            photo: RaydelysPhoto,
            bio: `Presently, I hold the title of a Full Stack Web Development Fellow at Pursuit, a prestigious 12-month software engineering fellowship with funding from Google. With an acceptance rate of just 9%.

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
            bio: `Jacqueline is full stack developer that studied under Pursuit. She underwent comprehensive training to master both front-end and back-end technologies. She loves to travel, eat ice cream, and wants to learn more coding languages. And hopes to add more cities to travel to in the near future.`,
            github: "https://github.com/jkpasaoa",
            linkedin: "https://www.linkedin.com/in/jacquelinepasaoa/",
        },
    ];


    let speech = new SpeechSynthesisUtterance();
    let synth = window.speechSynthesis;

    let textToSpeech1 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "Overview. Access & Learn is a mobile application designed to provide support to those suffering from Dyslexia in addition to literacy resources for individuals in New York. The app aims to help these individuals overcome literacy challenges and empower them to gain the education they need. Additionally, the app offers a dyslexia test and features tailored to accommodate users with dyslexia, ensuring an inclusive experience for all users."
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }

    let textToSpeech2 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "Features.  Literacy Program Locations: Access & Learn provides a comprehensive list of literacy program locations in New York. These centers offer various educational services to help users enhance their literacy skills. The app fetches this information from an external API using Axios and displays it in a user-friendly table format. Users can easily access details such as location, contact information, and services provided by each center.";
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }

    let textToSpeech3 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "Dyslexia Test. The app includes a dyslexia test to identify potential dyslexia in users. This test is designed to assess reading and language skills and can help users determine if they might have dyslexia. Early detection of dyslexia can lead to timely intervention and support, enabling users to overcome the challenges associated with the condition."
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }

    let textToSpeech4 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "Accessibility. The app places a strong emphasis on accessibility, making it easier for users with dyslexia and other learning differences to use the application effectively. We have implemented a text to speach so that users with a veriety of chalenges are able to read the content on the page."
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }

    let textToSpeech5 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "Mission. The mission of Access & Learn is to break barriers to education and improve literacy of individuals in New York in need of assistance. By providing a user-friendly platform with comprehensive literacy program information and dyslexia support, the app aims to create an inclusive learning environment and empower users to enhance their skills, pursue opportunities, and lead fulfilling lives."
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }

    let textToSpeech6 = () => {
        if(!synth.speaking && !synth.paused) {
            speech.text = "About the Developers. The Access & Learn app was created by a team of dedicated individuals who firmly believe in the profound impact of education on people's lives. Our team is committed to fostering literacy and empowering individuals with dyslexia through accessible and innovative technology. By focusing on enhancing literacy skills and providing dyslexia support, we aim to make a significant difference in the lives of those seeking to overcome educational challenges."
            speech.rate = 0.75;
            synth.speak(speech)
        } else {
            synth.paused ? synth.resume() : synth.pause();
        }
    }



    let speechStop = () => {
        synth.cancel();
    }

    return (
        <div className="about-wrapper">
            <br />

            <div className="about"><br /><br />
                <h1 style={{ fontWeight: 'bold' }}>About the App: Access & Learn</h1>

                <br />

                <p>
                    Overview:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech1()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>
                    Access & Learn is a mobile application designed to provide support to those suffering from Dyslexia in addition to literacy resources for individuals in New York. The app aims to help these individuals overcome literacy challenges and empower them to gain the education they need. Additionally, the app offers a dyslexia test and features tailored to accommodate users with dyslexia, ensuring an inclusive experience for all users.
                </p>
                <p>
                    Features:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech2()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>
                    Literacy Program Locations: Access & Learn provides a comprehensive list of literacy program locations in New York. These centers offer various educational services to help users enhance their literacy skills. The app fetches this information from an external API using Axios and displays it in a user-friendly table format. Users can easily access details such as location, contact information, and services provided by each center.
                </p>
                <p>
                    Dyslexia Test:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech3()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>The app includes a dyslexia test to identify potential dyslexia in users. This test is designed to assess reading and language skills and can help users determine if they might have dyslexia. Early detection of dyslexia can lead to timely intervention and support, enabling users to overcome the challenges associated with the condition.
                </p>

                <p>
                    Accessibility:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech4()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>The app places a strong emphasis on accessibility, making it easier for users with dyslexia and other learning differences to use the application effectively. We have implemented a text to speach so that users with a veriety of chalenges are able to read the content on the page.
                </p>
                <p>
                    Mission:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech5()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>
                    The mission of Access & Learn is to break barriers to education and improve literacy of individuals in New York in need of assistance. By providing a user-friendly platform with comprehensive literacy program information and dyslexia support, the app aims to create an inclusive learning environment and empower users to enhance their skills, pursue opportunities, and lead fulfilling lives.
                </p>
                <p>
                    About the Developers:&nbsp;<button className='textCardPlayButton' onClick={() => textToSpeech6()}><HiPlayPause /></button>&nbsp;<button className='textCardPauseButton' onClick={() => speechStop()}><HiStop /></button>
                </p>
                <p>
                    The Access & Learn app was created by a team of dedicated individuals who firmly believe in the profound impact of education on people's lives. Our team is committed to fostering literacy and empowering individuals with dyslexia through accessible and innovative technology. By focusing on enhancing literacy skills and providing dyslexia support, we aim to make a significant difference in the lives of those seeking to overcome educational challenges.
                </p>

            </div>

            <div className="team">
                <h1>Meet the Team</h1>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
