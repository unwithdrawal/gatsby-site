import React from "react"
import { Box, Grid } from "@material-ui/core"
import WrapTypo from "../components/WrapTypo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const OverDrive = () => {
  const data = useStaticQuery(graphql`
    query {
      title_image: file(relativePath: { eq: "campaign-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      touch_icon: file(relativePath: { eq: "touchIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      bgcolor="#211D1A"
      border={2}
      borderColor="#F2B23E"
      maxWidth="450px"
      margin="auto"
    >
      <Box height="30px" />
      <Box border={1} borderColor="#F2B23E" width="90%" margin="auto">
        <Box width="70%" margin="auto" mt={4}>
          <Img fluid={data.title_image.childImageSharp.fluid} />
        </Box>

        <Box mt={4} mb={4} textAlign="center">
          <WrapTypo color="#F2B23E" fs="17px" lh="220%">
            Overdriveは、自粛期間中に作り込んだ楽曲。
            <br />
            本当は日本でも歌いたかったし、
            <br />
            近くで感じてほしかった。
            <br />
            だからこそみんなが聴いて感じたことを、
            <br />
            歌詞にして教えてほしい。
            <br />
            教科書には載っていない方法で、
            <br />
            心のままに翻訳してほしい！
          </WrapTypo>
          <WrapTypo color="#F2B23E" fs="17px" lh="420%">
            ーfrom Conan Gray
          </WrapTypo>
        </Box>
        <Box borderTop={1} borderColor="#F2B23E" width="40%" margin="auto" />
        <Box width="85%" margin="auto" mt={8} mb={6}>
          <Grid container spacing={4} alignItems="center" justify="flex-end">
            <Grid item xs={4}>
              <Img fluid={data.touch_icon.childImageSharp.fluid} />
            </Grid>
            <Grid item xs={8}>
              <WrapTypo color="#F2B23E" fs="15px">
                コナン・グレイの新曲
                <br />
                「Overdrive」を聴いて、
                <br />
                メロディや世界観に浸ろう。
              </WrapTypo>
            </Grid>
          </Grid>
        </Box>

        <Box width="85%" margin="auto" mt={8} mb={6}>
          <Grid container spacing={4} alignItems="center" justify="flex-end">
            <Grid item xs={4}>
              <Img fluid={data.touch_icon.childImageSharp.fluid} />
            </Grid>

            <Grid item xs={8}>
              <WrapTypo color="#F2B23E" fs="15px">
                好きな歌詞の文節をタップ
                <br />
                すると、自分なりの
                <br />
                和訳を書き込もう。
              </WrapTypo>
            </Grid>
          </Grid>
        </Box>

        <Box width="85%" margin="auto" mt={8} mb={6}>
          <Grid container spacing={4} alignItems="center" justify="flex-end">
            <Grid item xs={4}>
              <Img fluid={data.touch_icon.childImageSharp.fluid} />
            </Grid>

            <Grid item xs={8}>
              <WrapTypo color="#F2B23E" fs="15px">
                投稿された歌詞の中から
                <br />
                新曲の公式和訳歌詞が
                <br />
                誕生予定。
              </WrapTypo>
              <WrapTypo color="#F2B23E" fs="1px">
                ※公式和訳歌詞として、後日公式ホームページにアップ予定です。
              </WrapTypo>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box height="30px" />
    </Box>
  )
}

export default OverDrive
