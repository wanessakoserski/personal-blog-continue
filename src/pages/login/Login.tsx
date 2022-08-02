import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import './Login.css';

function Login() {
    return(
        <Grid container
            className="part"
            direction='row'
        >
            <Grid alignItems='center' xs={6} >
                <Box paddingX={20} className="card">
                    <form>
                        <Typography 
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            component='h3'
                            align='center'
                            style={{fontWeight: 'bold'}}
                            >LogIn
                        </Typography>
                        <TextField 
                            id='usuario'
                            label='e-mail'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            className='form-input'
                            fullWidth 
                        />
                        <TextField 
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            className='form-input'
                            type='password'
                            fullWidth 
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className="form-btn">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box 
                        display='flex'
                        justifyContent='center'
                        marginTop={2}
                    >
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="mine-text">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }} className="mine-text">Cadastra-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/RBo7au0.png)`,
                backgroundRepeat: 'no-repeat',
                width: '100vh', minHeight: 'calc(100vh - 150px)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );
}

export default Login;