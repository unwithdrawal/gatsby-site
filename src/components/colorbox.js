import React from "react"
import { Grid, Box, Paper, makeStyles, Button } from "@material-ui/core"

// const redBox = makeStyles((theme)=> ({
// Paper:{
//     height:100,
//     bgcolor:"#aa647b",
// },
// }));

// const redPaper = makeStyles({
//     root:{
//         background: "#f44336",
//         height :100,
//     },
// });

// const red = redPaper();

const ColorBoxes = () => {
  return (
    <Box width="450px" bgcolor="#aa647b">
      <Box width="90%" m="auto" height={450}>
        {/* <Box>
        <Grid container spacing ={8}>
            <Grid item xs ={6}>
                <Box bgcolor="#ffb74d" height={100}/>
            </Grid>
            <Grid item xs ={6}>
                <Box bgcolor="#ffb74d" height={100}/>
            </Grid>
        </Grid>
        </Box> */}

        <Box height={100} bgcolor="#f44336" />
        <Box height={100} bgcolor="#2196f3">
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Button variant="contained">aaa</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained">aaa</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained">aaa</Button>
            </Grid>
          </Grid>
        </Box>

        <Box height={100} bgcolor="#ffb74d">
          <Grid container spaceing={8}>
            <Grid item xs={6}>
              <Button variant="contained">aaa</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">aaa</Button>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid></Grid>
      </Box>
    </Box>
  )
}

export default ColorBoxes
