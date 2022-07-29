import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import { Grid, Typography} from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#973b66", height: "72px" }} className='social'>
                        <Box paddingTop={1} display="none" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "#fac7e8" }}></Typography>
                        </Box>
                        <Box className='social'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#fac7e8" }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#fac7e8" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#973b66", height: "68px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#fac7e8" }} >© 2022</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom style={{ color: "#fac7e8" }} align="center">Wanessa Koserski dos Santos</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;