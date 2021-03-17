import { Box, Hidden, Typography, Button } from "@material-ui/core"
import styled from "styled-components"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import "../style/font-style.css"

const WrapTypoStyled = styled(Typography)`
  font-family: ${props =>
    props.isCooperItalic
      ? "CooperMdItalic,yumincho,serif"
      : props.Notosans
      ? "Noto Sans JP, sans-serif"
      : props.Yumincho
      ? "yumincho,serif"
      : props.AOTF
      ? "A-OTF-Gothic"
      : props.oliver
      ? "oliverquin"
      : props.helio
      ? "helio"
      : props.gotham
      ? "Gotham"
      : "CooperMd,yumincho,serif"} !important;
  color: ${props => (props.color ? props.color : "#717171")};
  line-height: ${props => (props.lh ? props.lh : "150%")} !important;
  letter-spacing: ${props => (props.ls ? props.ls : "normal")} !important;
  font-weight: ${props => (props.fw ? props.fw : 500)} !important;
  margin-top: ${props => (props.mt ? props.mt : 0)} !important;
  margin-left: ${props => (props.ml ? props.ml : 0)} !important;
  margin-right: ${props => (props.mr ? props.mr : 0)} !important;
  margin-bottom: ${props => (props.mb ? props.mb : 0)} !important;
  font-size: ${props => (props.fs ? props.fs : "")};
  font-style: normal;
  @media screen and (max-width: 600px) {
    font-size: ${props => (props.xsfs ? props.xsfs : "")};
  }
  @media screen and (min-width: 600px) and (max-width: 1280px) {
    font-size: ${props => (props.mdfs ? props.mdfs : "")};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${props => (props.lgfs ? props.lgfs : "")};
  }
`

export default WrapTypoStyled
