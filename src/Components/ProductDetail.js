import React from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import NavBar from "./Subcomponents/NavBar";
const useStyles = makeStyles({
    div: {
        textAlign:"left",
    },
    // container: {
    // },
    title:{
        borderBottom:"1px solid"
    }
})


export default function ProductDetails(){
    let {state} = useLocation()
    const classes = useStyles()
    state['name'] = state.name.charAt(0).toUpperCase() + state.name.slice(1)
    
    return(
        <>  
            <NavBar/>
            <Grid 
                container
                margin="auto"
            >
                <Grid item 
                    margin="auto"
                    width="70%"
                    padding="5%"
                >
                    <Grid 
                        container
                        spacing={2}
                    >
                        <Grid item 
                            xs={12} 
                            sm={12}
                            textAlign="left"
                            className={classes.title}
                        >
                            <Typography variant="h5" 
                                component="div" 
                            >
                                {state.name}.
                            </Typography>
                        </Grid>
                        <Grid item 
                            xs={12} 
                            sm={6} 
                            className={classes.div}
                        >
                            <img 
                                // style="margin:'auto'"
                                // src={require(state.urls[0].urls)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.div}>
                            <Typography variant="h6">Caracteristicas</Typography>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}