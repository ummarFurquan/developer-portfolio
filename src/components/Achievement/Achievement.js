import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: theme.secondary}}>
                    <div className="achievement-body">
                        <h1 style={{color: theme.primary}}>Actuarial Certifications</h1>
                        <h4 style={{color:theme.tertiary}}>{achievementData.bio}</h4>
                    </div>
                    <div className="achievement-cards">
                        {achievementData.achievements.map((achieve, index) => ( 
                            <AchievementCard 
                                key={index}
                                id={achieve.id}
                                certificates={[
                                    achieve.certificate1,
                                    achieve.certificate2,
                                    achieve.certificate3,
                                    achieve.certificate4,
                                    achieve.certificate5,
                                    achieve.certificate6,
                                    achieve.certificate7,
                                    achieve.certificate8,
                                    achieve.certiicate9
                                ]}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}


export default Achievement
