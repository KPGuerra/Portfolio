import React from 'react'

function BlogCards (props) {
    const blogObj = props.blogObject

    return (
        <div>
            <h1>{blogObj.title}</h1>
            <img src={blogObj.thumbnail}/>
            
        </div>
    )
}

export default BlogCards