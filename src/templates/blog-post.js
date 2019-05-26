import React from "react"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <small
          style={{
            color: "gray",
          }}
        >
          Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </small>
        <div
          style={{
            lineHeight: "2rem",
            fontSize: "18px",
            marginBottom: "1.75rem",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        author
      }
    }
  }
`
