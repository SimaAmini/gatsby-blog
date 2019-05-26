import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Bio from "../components/bio"

const IndexPage = props => {
  // const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Bio />
      {props.data.allMarkdownRemark.edges.map(post => (
        <div
          key={post.node.id}
          className="post-card"
          style={{
            fontSize: "16px",
            lineHeight: "1.5rem",
          }}
        >
          <h3
            style={{
              textTransform: "uppercase",
            }}
          >
            {post.node.frontmatter.title}
          </h3>
          <p>
            {post.node.excerpt}
            <Link to={post.node.frontmatter.path}>Read More</Link>
          </p>
          <small>
            Posted by: {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <hr />
          <br />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
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
