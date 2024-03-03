import React, { useContext } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
    
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: 'black'}}>{startYear}-{endYear}</h6>
                    <h2 style={{color: 'black'}}>{institution}</h2>
                    <span/>
                    <h4 style={{color: 'black'}}>{course}</h4>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
