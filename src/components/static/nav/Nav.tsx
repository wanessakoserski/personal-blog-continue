import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import useLocalStorage from "react-use-localstorage";

function Nav() {

    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado')
        history('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className="nav-main">
                    <Box>
                        <Typography variant="h5" color="inherit" className="name">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box className="nav-tool">
                        <Link to='/home'>
                            <Box mx={1} className='nav-button'>
                                <Typography variant="h6" color="inherit">
                                        home
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Link to='/posts'>
                            <Box mx={1} className='nav-button'>
                                <Typography variant="h6" color="inherit">
                                        postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas'>
                            <Box mx={1} className='nav-button'>
                                <Typography variant="h6" color="inherit">
                                        temas
                                </Typography>
                            </Box>
                        </Link>
                    
                        <Link to='/formularioTema'>
                            <Box mx={1} className='nav-button'>
                                <Typography variant="h6" color="inherit">
                                        novo tema
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/'>
                            <Box mx={1} className='nav-button' onClick={goLogout}>
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