import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';

function Nav() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário foi deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
          });
        history('/login')
    }

    var navComponent;

    if (token == 'Basic a29zZXJza2lAZ21haWwuY29tOndhbjEyMw==') {
        navComponent = <AppBar position="static">
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
                                                    usuários
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
    } else if(token != '') {
        navComponent = <AppBar position="static">
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
    } else {
        navComponent = <AppBar position="static">
                            <Toolbar variant="dense" className="nav-main">
                                <Box>
                                    <Typography variant="h5" color="inherit" className="name">
                                        Blog Pessoal
                                    </Typography>
                                </Box>

                                <Box className="nav-tool">
                                    
                                </Box>
                            </Toolbar>
                        </AppBar>
    }

    return (
        <>
            {navComponent}
        </>
    );
}

export default Nav;