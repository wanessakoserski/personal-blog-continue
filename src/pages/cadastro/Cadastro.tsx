import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
    return(
        <>
            <Grid 
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid
                    item
                    xs={6}
                    className='imagem-cadastro'
                >

                </Grid>
                <Grid
                    item
                    xs={6}
                    alignItems='center'
                >
                    <form>
                        <Typography 
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            component='h3'
                            align='center'
                            style={{fontWeight: 'bold'}}
                            >Cadastro
                        </Typography>
                        <TextField 
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            className='form-input-cadastro'
                            fullWidth 
                        />
                        <TextField 
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            className='form-input-cadastro'
                            fullWidth 
                        />
                        <TextField 
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            className='form-input-cadastro'
                            type='password'
                            fullWidth 
                        />
                        <TextField 
                            id='confirmarSenha'
                            label='confirmar senha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            className='form-input-cadastro'
                            type='password'
                            fullWidth 
                        />
                        <Box marginTop={2} textAlign='center' className='box-cadastro-button'>
                            <Link to='/' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className="form-btn">
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to='/' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className="form-btn">
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Cadastro;