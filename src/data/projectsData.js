import project1 from '../assets/Projects/autism.jpg'
import project3 from '../assets/Projects/political.jpg'
import project2 from '../assets/Projects/data.jpg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Simplifying Autism Spectrum Disorder Screening',
        projectDesc: 'Determining top characteristics for determining ASD traits using Logistic Regression.',
        tags: ['Tidyverse', 'Sklearn' ],
        code: 'https://github.com/AtishaRajpurohit/Simplifying_ASD_Screening',
        image: project1
    },
    {
        id: 2,
        projectName: 'Data Visualization to help Retail Investors',
        projectDesc: 'Data Visualisation to simplify technical and fundamental analyses for Retail Stock Selection',
        tags: ['Tidyverse', 'CSS','Plotly, Ggplot'],
        code: 'https://github.com/AtishaRajpurohit/DataVisualisation_StockAnalysis',
        image: project2
    },
    {
        id: 3,
        projectName: 'Political Reddit Data Analysis',
        projectDesc: 'Analysing Reddit data to assess the political environments for Democrats and Republicans',
        tags: ['AWS'],
        code: 'https://github.com/AtishaRajpurohit/political_analysis_reddit_data',
        image: project3
    },
]