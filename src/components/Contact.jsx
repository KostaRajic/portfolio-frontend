/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone  } from "@fortawesome/free-solid-svg-icons";
import { EmailEnvelope } from "../Portals/EmailEnvelope";
import { PhoneContact } from "../Portals/PhoneContact";


const contactIcons = [faLinkedin, faGithub, faEnvelope, faPhone];

export const Contact = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showPhone, setShowPhone] = useState(false)


  const handleEnvelopeClick = (e) => {
    e.preventDefault();
    setShowEnvelope(true);
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setShowPhone(true);
  };

  return (
    <p>
      {contactIcons?.map((icon, index) => (
        <a
          key={index}
          href={
            icon === faLinkedin
              ? "https://www.linkedin.com/in/kosta-rajic-615664308/"
              : icon === faGithub
              ? "https://github.com/KostaRajic"
              : icon === faEnvelope
              ? "mailto:your-email@example.com"
              : icon === faPhone
              ? "tel:+1234567890" 
              : ""
          }
          target={icon === faEnvelope ? undefined : "_blank"}
          onClick={ icon === faEnvelope
            ? handleEnvelopeClick
            : icon === faPhone
            ? handlePhoneClick
            : undefined}
        >
          <span>
            <FontAwesomeIcon
              icon={icon}
              className="contactIcon"
            />
          </span>
        </a>
      ))}
      {showEnvelope && <EmailEnvelope goBack={() => setShowEnvelope(false)} />}
      {showPhone && <PhoneContact goBack={() => setShowPhone(false)} />}
    </p>
  );
};