import React, { useContext, useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";

import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();
  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("sucessfully sent");
        });
      } else {
        toast.error("invalid Email");
      }
    } else {
      toast.error("Enter all the input field");
    }
  };
  return (
    <>
      <div
        className="contacts"
        id="contacts"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="contacts--container">
          <h1 style={{ color: theme.primary }}>Contacts</h1>
          <div className="contacts-body">
            <div className="contacts-form">
              <form onSubmit={handleContactForm}>
                <div className="input-container">
                  <label htmlFor="Name" className={classes.label}>
                    Name
                  </label>
                  <input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="Name"
                    className={`form-input ${classes.input}`}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="Email" className={classes.label}>
                    Email
                  </label>
                  <input
                    placeholder="examplemail@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    className={`form-input ${classes.input}`}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="Message" className={classes.label}>
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message...."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    name="Message"
                    className={`form-message ${classes.message}`}
                  />
                </div>

                <div className="submit-btn">
                  <button type="submit" className={classes.submitBtn}>
                    <p>{!success ? "Send" : "Sent"}</p>
                    <div className="submit-icon">
                      <AiOutlineSend
                        className="send-icon"
                        style={{
                          animation: !success
                            ? "initial"
                            : "fly 0.8s linear both",
                          position: success ? "absolute" : "initial",
                        }}
                      />
                      <AiOutlineCheckCircle
                        className="success-icon"
                        style={{
                          display: !success ? "none" : "inline-flex",
                          opacity: !success ? "0" : "1",
                        }}
                      />
                    </div>
                  </button>
                </div>
              </form>
            </div>

            <div className="contacts-details">
              <a
                href={`mailto:${contactsData.email}`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiAtSign />
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
              </a>
              <a
                href={`tel:${contactsData.phone}`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiPhone />
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
              </a>
              <div className="personal-details">
                <div className={classes.detailsIcon}>
                  <HiOutlineLocationMarker />
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
              </div>

              <div className="socialmedia-icons">
                {socialsData.twitter && (
                  <a
                    href={socialsData.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaTwitter aria-label="Twitter" />
                  </a>
                )}
                {socialsData.github && (
                  <a
                    href={socialsData.github}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaGithub aria-label="GitHub" />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a
                    href={socialsData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaLinkedinIn aria-label="LinkedIn" />
                  </a>
                )}
                {/* {socialsData.instagram && (
                  <a
                    href={socialsData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaInstagram aria-label="Instagram" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </div>
        {/* <img src='' alt="contacts" className="contacts--img" /> */}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        theme="dark"
        closeOnClick={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        limit={1}
      />
    </>
  );
}

export default Contacts;
