import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <>
        <AppBar position="static">
            <Toolbar variant="dense" className="nav-main">
                <Box style={{ cursor: "pointer" }}>
                    <Typography variant="h5" color="inherit" className="name">
                        Blog Pessoal
                    </Typography>
                </Box>

                <Box className="nav-tool">
                    <Link to='/home'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                    home
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <a>
                                postagens
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <a>
                                temas
                            </a>
                        </Typography>
                    </Box>
                   
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <a>
                                    novo tema
                                </a>
                            </Typography>
                        </Box>
                   
                    <Link to='/'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                    logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  );
}

export default Nav;