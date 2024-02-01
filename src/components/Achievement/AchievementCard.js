import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Tilt from "react-parallax-tilt";
import { ThemeContext } from "../../contexts/ThemeContext";

import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <Tilt
        glareEnable={true} glareMaxOpacity={0.5} glareColor="white" glarePosition="top" glareBorderRadius="10px" 
      >
        <div key={id} className={`achievement-card ${classes.achievementCard}`} style={{backgroundColor:'#28282B'}}>
          <div className="achievecard-content">
            <div className="achievecard-details1">
              <h2 style={{ color: 'white' }}>{title}</h2>
              <p style={{ color: 'white' }}>{details}</p>
            </div>
            <div
              className="achievecard-details2"
              style={{ color: 'white' }}
            >
              <h5>{date}</h5>
              <div className="achievecard-field">
                <AiOutlineFolder />
                <h5>{field}</h5>
              </div>
            </div>
          </div>
          <div className="achievecard-imgcontainer">
            <img src={image} alt="" />
          </div>
        </div>
      </Tilt>
    </Fade>
  );
}

export default AchievementCard;
