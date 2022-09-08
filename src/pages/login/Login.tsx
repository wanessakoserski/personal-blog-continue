import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import { Box } from "@mui/material";
import './Login.css';
import UsuarioLogin from '../../models/UsuarioLogin';
import { useDispatch } from 'react-redux';
import {addToken} from '../../store/tokens/actions';
import {toast} from 'react-toastify';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        nome: '',
        email: '',
        senha: '',
        token: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token != '') {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await login (`usuario/login`, userLogin, setToken)
            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } catch(error){
            toast.error('Erro ao logar. Dados do usuário incorretos', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        }        
    }

    return(
        <Grid container
            className="part"
            direction='row'
        >
            <Grid item alignItems='center' xs={6} >
                <Box paddingX={20} className="card">
                    <form onSubmit={onSubmit}>
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
                            value={userLogin.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email'
                            label='e-mail'
                            variant='outlined'
                            name='email'
                            margin='normal'
                            className='form-input'
                            fullWidth 
                        />
                        <TextField 
                            value={userLogin.senha}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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
                            <Button type='submit' variant='contained' color='primary' className="form-btn">
                                Logar
                            </Button>    
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
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }} className="mine-text cadastra-text">Cadastra-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className='login-image'>

            </Grid>
        </Grid>
    );
}

export default Login;