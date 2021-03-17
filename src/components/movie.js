import React from "react"
import { Box } from "@material-ui/core"
import styled from "styled-components"
import WrapTypo from "../components/WrapTypo"

const Movie = () => {
  return (
    <Box bgcolor="#211D1A" maxWidth="450px" margin="auto">
      <Box width="90%" margin="auto">
        <Box mt={4} mb={4}>
          <WrapTypo fs="30px" color="#F4A460" align="center">
            ムービー部門
          </WrapTypo>
        </Box>
        <Box>
          <WrapTypo color="#F4A460">
            ハッシュタグを使って、
            <br />
            自分なりのオーバードライブを投稿しよう！
          </WrapTypo>
        </Box>
      </Box>
    </Box>
  )
}

export default Movie
