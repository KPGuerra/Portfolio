import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../HomePage/Home'
import AboutMe from '../Content/About/About'
import SkillsContainer from '../Content/Skills/SkillsContainer'
import EducationPage from '../Content/Education/Education'
import Projects from '../Content/Projects/Projects'
import BlogsContainer from '../Content/Blogs/BlogsContainer'
import ContactPage from '../Content/Contact/Contact'

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={AboutMe} />
                <Route path="/skills" component={SkillsContainer} />
                <Route path="/education" component={EducationPage} />
                <Route path="/projects" component={Projects} />
                <Route path="/blogs" component={BlogsContainer} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </>
    )
}

export default Routes