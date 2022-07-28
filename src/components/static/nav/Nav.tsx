import React from "react";
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import './Nav.css';

function Navbar() {
  return (
    <>
        <AppBar position="static">
            <Toolbar variant="dense" className="nav-main">
                <Box style={{ cursor: "pointer" }}>
                    <Typography variant="h5" color="inherit">
                        Blog Pessoal
                    </Typography>
                </Box>

                <Box className="nav-tool">
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            novo tema
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  );
}

export default Navbar;