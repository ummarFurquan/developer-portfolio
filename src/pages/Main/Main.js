import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,  Education, Experience, Contacts, Projects, Achievement,  } from '../../components'
import Art from '../../components/Art/Art'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Art/>
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
