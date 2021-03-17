import React from "react"
import { Box } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import WrapTypo from "../components/WrapTypo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Kemio = () => {
  const data = useStaticQuery(graphql`
    query {
      guest_artists: file(relativePath: { eq: "guestArtists.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kemio: file(relativePath: { eq: "kemio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      universal: file(relativePath: { eq: "universal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box bgcolor="#211D1A" maxWidth="450px" margin="auto">
      <Box width="90%" margin="auto">
        <Box>
          <Box width="70%" margin="auto">
            <Img fluid={data.guest_artists.childImageSharp.fluid} />
          </Box>

          <Box maxWidth="400px" mb={6} justfy="between-space">
            <WrapTypo color="#F2B23E" fs="14px">
              コナンの吐き出す言葉に共感する同世代の豪華クリエイター・アーティストたちが、プロジェクトに参加中。"Overdrive"をキーワードに、十人十色の言葉が並ぶ。
            </WrapTypo>
          </Box>

          <Box width="30%" margin="auto" mb={3}>
            <WrapTypo color="#F2B23E" fs="45px">
              No.1
            </WrapTypo>
          </Box>

          <Box width="70%" margin="auto">
            <Img fluid={data.kemio.childImageSharp.fluid} />
          </Box>
          <Box width="70%" margin="auto" textAlign="center" mb={10}>
            <WrapTypo color="#F2B23E" fs="45px">
              Kemio
            </WrapTypo>
            <WrapTypo color="#F2B23E" fs="15px">
              @mmkemio
            </WrapTypo>
          </Box>

          <Box width="30%" margin="auto" textAlign="center">
            <WrapTypo color="#F2B23E">サビパート</WrapTypo>
          </Box>

          <Box maxWidth="90%" margin="auto">
            <WrapTypo color="#F2B23E" fs="60px" mb={6}>
              “
            </WrapTypo>
          </Box>

          <Box maxWidth="90%" margin="auto" mb={6}>
            <WrapTypo color="#F2B23E" fs="12px" lh="180%">
              Running down the street no left-right,left-right
              <br />
              I don't wanna see no red right ,red right
              <br />
              Fast lane on a beat go ten five,ten five
              <br />
              You right next to me,feel the heat going overdrive
              <br />
              Going overdrive ,yeah
            </WrapTypo>
          </Box>

          <Box textAlign="right" maxWidth="90%" margin="auto">
            <WrapTypo color="#F2B23E" fs="60px">
              ”
            </WrapTypo>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Kemio
