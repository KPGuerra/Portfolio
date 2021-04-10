import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../HomePage/Home'
import About from '../Content/About/About'
import SkillsContainer from '../Content/Skills/SkillsContainer'
import Education from '../Content/Education/Education'
import Projects from '../Content/Projects/Projects'
import BlogsContainer from '../Content/Blogs/BlogsContainer'
import Contact from '../Content/Contact/Contact'

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={SkillsContainer} />
                <Route path="/education" component={Education} />
                <Route path="/projects" component={Projects} />
                <Route path="/blogs" component={BlogsContainer} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    )
}

export default Routes