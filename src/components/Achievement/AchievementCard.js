import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";


import "./Achievement.css";

// Modify AchievementCard component to accept an array of certificates
function AchievementCard({ id, certificates }) {
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
          <div key={id} className={`achievement-card ${classes.achievementCard}`} style={{ backgroundColor: '#28282B' }}>
              <div className="achievecard-content">
                  <div className="achievecard-details1">
                      <h2 style={{ color: 'white' }}>Actuarial Certifications</h2>
                      <ul style={{ color: 'white' }}>
                          {certificates.map((certificate, index) => (
                              <li key={index}>{certificate}</li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </Fade>
  );
}


export default AchievementCard;
