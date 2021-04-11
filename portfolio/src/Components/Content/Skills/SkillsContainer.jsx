import React from 'react'
import SkillCards from './SkillCards'

function SkillsContainer() {
    let languages = [{"name":"Ruby"}, {"name" : "JavaScript"},{"name": "React.js"}, {"name" : "Redux"}, {"name" : "Rails"}, {"name" : "HTML"}, {"name" : "CSS"}]
    let patterns = ["ActiveRecord", "MVC", "ActiveStorage", "RESTful API", "JWT", "OAuth"]
    
    const renderSkillCards = () => {
        return languages.map(language => <SkillCards skillObj={language}/>)
    }
    
    return (
        <>
            <h1> My Skills </h1>
            <p> I graduated from The Flatiron School Engineer as a Software Engineer. Over the course of 5 months, I created 5 different projects where I collaborated with other amazing classmates. My main area of expertise is in front-end developement: HTML, JS, CSS, and Animations. However I am fully experienced with creating single page applications built on Ruby on Rails as a backend. Technologies I used:</p>
            <break/>
            <h3> Programming languages</h3>
            {renderSkillCards()}
        </>
    )
}

export default SkillsContainer