import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Achievement.css";

function AchievementCard({ certificate, description }) {
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
      <div className={`achievement-card ${classes.achievementCard}`} style={{ backgroundColor: '#28282B' }}>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: 'white' }}>{certificate}</h2>
            <p style={{ color: 'white',  fontFamily: "var(--primaryFont)" }}>{description}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;

