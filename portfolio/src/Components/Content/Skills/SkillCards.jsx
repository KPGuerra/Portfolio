import React from 'react'

function SkillCards (props) {
    let languages = ["Ruby", "JavaScript","React.js", "Redux","Rails", "HTML", "CSS"]
    let patterns = ["ActiveRecord", "MVC", "ActiveStorage", "RESTful API", "JWT", "OAuth"]
    return (
        <h3> {props.skillObj.name}</h3>

    )
}

export default SkillCards