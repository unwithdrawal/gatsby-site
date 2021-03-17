import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoT from "../components/got"
import ColorBoxes from "../components/colorbox"
import Movies from "../components/movie"
import { Grid, Box, Paper, makeStyles, Button } from "@material-ui/core"
import OverDrive from "../components/createmyoverdrive"
import Kemio from "../components/artist_kemio"

const IndexPage = () => (
  <Layout>
    <Kemio />
  </Layout>
)

export default IndexPage

{
  /* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */
}
