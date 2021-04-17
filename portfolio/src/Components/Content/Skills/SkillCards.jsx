import React from 'react'

function SkillCards (props) {
    return (
        <div>
            <h3> {props.skillObj.name}</h3>
            <img src={props.skillObj.icon} width="180" height="170"/>
        </div>
    )
}

export default SkillCards