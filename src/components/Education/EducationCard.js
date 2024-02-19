import React, { useContext } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
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
    
            <div key={id} className={`education-card ${classes.educationCard}`} style={{backgroundColor:'#28282B', marginBottom:'40px'}} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'dark' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: 'white'}}>{startYear}-{endYear}</h6>
                    <h3 style={{color: 'white'}}>{institution}</h3>
                    <h4 style={{color: 'white'}}>{course}</h4>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
