import React from 'react'
import BlogCards from './BlogCards'

class BlogsContainer extends React.Component {
    blogsURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fkpguerra96.medium.com%2Ffeed"

    state = {
        myFeed : []
    }

    componentDidMount() {
        if (this.state.myFeed.length === 0) {
            fetch(this.blogsURL)
                .then(response => response.json())
                .then(feedArray => {
                    this.setState({ myFeed : feedArray.items})
                })
        }
    }

    renderBlogCards = () => {
        let blogs = this.state.myFeed
        console.log(blogs)
        return blogs.map(blog => <BlogCards blogObject={blog} />)
    }


    render() {
        return (
            <>
                {this.state.myFeed.length === 0 ? <h1> Loading Blog Post </h1> : <>{this.renderBlogCards()}</> }
            </>
        )
    }
}

export default BlogsContainer