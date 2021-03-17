import React from "react"
import { useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"

const Allmight = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "allmight.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
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

export default Allmight