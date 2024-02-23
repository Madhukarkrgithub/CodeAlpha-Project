import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt,FaLinkedin,FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle" style={{textAlign:"center" , color:"white"}}>Get In Touch</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <FaMobileAlt />
              <p id="contact-phone">+91 7079493196</p>
            </Box1>
            <Box1 id="contact-email">
              <HiMail />
              {/* <p>madhukarkumar2468@gmail.com</p> */}
              <a
              href="mailto:madhukarkumar2468@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
             >
              madhukarkumar2468@gmail.com
             </a>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Ara, Bihar</p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/madhukarkr2468/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madhukar kumar
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                href="https://github.com/Madhukarkrgithub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madhukarkrgithub
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
