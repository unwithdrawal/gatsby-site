import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "campaign-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

// const Image = props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(maxWidth: 300) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     /*
//       サイズFIXしたい時は上記childImageSharp {...}の中を以下のように変更
//               sizes(maxWidth: 300) {
//                 ...GatsbyImageSharpSizes
//               }
//     */
//     render={data => {
//       const image = data.images.edges.find(n => {
//         return n.node.relativePath.includes(props.filename)
//       })
//       if (!image) {
//         return null
//       }
//       //const imageSizes = image.node.childImageSharp.sizes; ←サイズFIXしたい時
//       return (
//         /*<Img alt={props.alt} sizes={imageSizes} /> ←サイズFIXしたい時 */
//         <Img fluid={image.node.childImageSharp.fluid} alt={props.alt} />
//       )
//     }}
//   />
// )
export default Image
