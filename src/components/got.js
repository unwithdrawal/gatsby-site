import React from "react"
import {Grid,Box,Button,styled} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const GoTPage = () => {

    const SizedButton = makeStyles({
        root:{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color:"white",
            height :48,
        },
    });

    const classes = SizedButton();

    return(
      <Box>
        <h1 align = "center">STORY</h1>
        <hr></hr>
          <Grid container spacing={8}>
            <Grid item xs={6}>
                <Button　className={classes.root}>第一章</Button>
             </Grid>
            <Grid item xs={6}>
                 <Button>第二章</Button>
               </Grid>
              <Grid item xs={6}>
                 <Button>第三章</Button>
               </Grid>
            <Grid item xs={6}>
                  <Button>第四章</Button>
            </Grid>
          </Grid>
    
        </Box>
    )
    
    }

    export default GoTPage