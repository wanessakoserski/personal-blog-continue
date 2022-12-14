import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrar } from '../../services/Service';
import './Cadastro.css';
import {toast} from 'react-toastify';

function Cadastro() {

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            email: '',
            senha: '',
            birthday: ''
        })

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            email: '',
            senha: '',
            birthday: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history('/login')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(user)
        if(confirmarSenha == user.senha){
            cadastrar(`/usuario/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } else {
            toast.error('Dados inconsistente. Por favor, verificar as ifnormações de cadastro', {
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
        <>
            <Grid 
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                className="part-cadastro"
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
                    className='form-cadastro'
                >
                    <Box paddingX={20} className="card">
                        <form onSubmit={onSubmit}>
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
                                value={user.nome}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome'
                                label='nome'
                                variant='outlined'
                                name='nome'
                                margin='normal'
                                className='form-input-cadastro'
                                fullWidth 
                                required
                            />
                            <TextField
                                value={user.email}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='email'
                                label='e-mail'
                                variant='outlined'
                                name='email'
                                margin='normal'
                                className='form-input-cadastro'
                                fullWidth 
                                required
                            />
                            <TextField 
                                value={user.senha}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha'
                                label='senha'
                                variant='outlined'
                                name='senha'
                                margin='normal'
                                className='form-input-cadastro'
                                type='password'
                                fullWidth 
                                required
                            />
                            <TextField
                                value={confirmarSenha}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha'
                                label='confirmar senha'
                                variant='outlined'
                                name='confirmarSenha'
                                margin='normal'
                                className='form-input-cadastro'
                                type='password'
                                fullWidth 
                                required
                            />
                            <Box marginTop={2} textAlign='center' className='box-cadastro-button'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className="form-btn">
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary' className="form-btn">
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Cadastro;