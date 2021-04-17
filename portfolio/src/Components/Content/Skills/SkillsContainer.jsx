import React from 'react'
import SkillCards from './SkillCards'

function SkillsContainer() {
    let languages = [
        { "name": "Ruby on Rails", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands-vol-2%2F512%2Fruby-on-rails-512.png&f=1&nofb=1" },
        { "name": "JavaScript", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fjavascript-logo-png-transparent.png&f=1&nofb=1" },
        { "name": "React.js", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&f=1&nofb=1" },
        { "name": "Redux", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freactjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1" },
        { "name": "HTML", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seoclerk.com%2Fpics%2Fwant55033-1LAR5w1506595825.png&f=1&nofb=1" },
        { "name": "CSS", "icon": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-p-UlOT9fI9g%2FWCwwxGAEWbI%2FAAAAAAAAADw%2FK8BpZbk8L2UQTXOnJIQOZddELeV-3YAvgCPcB%2Fs1600%2Flogo-css3.jpg&f=1&nofb=1" }]

    let patterns = [
        { "name": "ActiveRecord" },
        { "name": "MVC" },
        { "name": "ActiveStorage" },
        { "name": "RESTful API" },
        { "name": "JWT" },
        { "name": "OAuth" }]

    const renderSkillCards = () => {
        return languages.map(language => <SkillCards skillObj={language} />)
    }

    const listPatterns = () => {
        return patterns.map(pattern => <li> {pattern.name}</li>)
    }

    return (
        <>
            <div>
                <h1> My Skills </h1>
                <p> 
                    I graduated from The Flatiron School Engineer as a Software Engineer. 
                    Over the course of 5 months, I created 5 different projects where I collaborated with other amazing classmates. 
                    My main area of expertise is in front-end developement: HTML, JS, CSS, and Animations. 
                    However I am fully experienced with creating single page applications built on Ruby on Rails as a backend. 
                    Technologies I used:
                </p>
            </div>

            <break />
            <div>
                <h3> Programming languages </h3>
                {renderSkillCards()}
            </div>

            <div>
                <h3> Patterns </h3>
                <ul>
                    {listPatterns()}
                </ul>
            </div>
        </>
    )
}

export default SkillsContainer