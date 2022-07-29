import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './Nav.css';

function Navbar() {
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
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <a>
                                home
                            </a>
                        </Typography>
                    </Box>
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
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <a>
                                logout
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  );
}

export default Navbar;