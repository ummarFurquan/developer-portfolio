import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <>
        
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img">
                    <img src= {image} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: 'black'}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: 'black'}}>{company}</h4>
                    <h5 style={{color: 'black'}}>{jobtitle}</h5>
                </div>
            </div>
        </Fade>   
        </>
    )
}

export default ExperienceCard
