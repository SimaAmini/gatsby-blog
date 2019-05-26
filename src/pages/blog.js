import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts:</h1>

    {data.allMarkdownRemark.edges.map(post => (
      <div>
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by: {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <Link to={post.node.frontmatter.path}>Read More</Link>
        </div>
        <br />
        <hr />
        <br />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
export default BlogPage
