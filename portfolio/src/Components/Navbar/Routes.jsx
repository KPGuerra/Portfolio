import React from 'react'
import { Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/education" component={Education} />
                <Route path="/projects" component={Projects} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    )
}

export default Routes