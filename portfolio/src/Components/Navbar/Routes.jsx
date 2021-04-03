import React from 'react'
import { Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/about" render={() => <HomePage />} />
                <Route path="/skills" component={Login} />
                <Route path="/education" component={Signup} />
                <Route path="/projects" component={Inbox} />
                <Route path="/blogs" component={ExploreThoughts} />
                <Route path="/contact" component={CreateThought} />
            </Switch>
        </>
    )
}

export default Routes