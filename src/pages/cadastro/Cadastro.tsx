import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrar } from '../../services/Service';
import './Cadastro.css';

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
            alert('Usuario cadastrado com sucesso')
        }else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

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
                </Grid>
            </Grid>
        </>
    );
}

export default Cadastro;