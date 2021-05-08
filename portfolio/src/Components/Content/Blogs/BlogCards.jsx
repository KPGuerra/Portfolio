import React from 'react'

function BlogCards (props) {
    const blogObj = props.blogObject

    return (
        <div>
            <h1>{blogObj.title}</h1>
            <img src={blogObj.thumbnail} width="470" height="250"/>
            <p> {blogObj.pubDate}</p>
            
        </div>
    )
}

export default BlogCards