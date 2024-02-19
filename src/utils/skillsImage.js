import sas from '../assets/svg/skills/sas-svgrepo-com.svg'
import python from '../assets/svg/skills/python.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import pandas from '../assets/svg/skills/pandas-svgrepo-com.svg'
import R from '../assets/svg/skills/r-programming-language-icon.svg'
import spss from '../assets/svg/skills/spss-1.svg'
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import sequel from '../assets/svg/skills/sql-database-generic.svg'
import tableau from '../assets/svg/skills/tableau-icon-svgrepo-com.svg'
import minitab from '../assets/svg/skills/Minitab.svg'
import excel from '../assets/svg/skills/excel-svgrepo-com.svg'

import github from '../assets/svg/skills/github.svg'
import jupyter from '../assets/svg/skills/jupyter-ar21.svg'
import Vscode from '../assets/svg/skills/visual-studio-code-icon.svg'

import aws from '../assets/svg/skills/icons8-amazon-web-services-144.svg'
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {

        case 'aws':
            return aws
        case 'vscode':
            return Vscode
        case 'jupyter':
            return jupyter

        case 'github':
            return github
        case 'sql':
            return sequel
        case 'excel':
            return excel
        case 'minitab':
            return minitab
        case 'spss':
            return spss
        case 'r':
            return R
        case 'pandas':
            return pandas
        case 'tableau':
            return tableau
        case 'sas':
            return sas
        case 'html':
            return html;
        case 'css':
            return css;
        case 'numpy':
            return numpy;
        case 'python':
            return python
        default:
            break;
    }
}
