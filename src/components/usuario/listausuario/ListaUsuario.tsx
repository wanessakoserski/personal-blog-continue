import React, { useEffect, useState } from 'react'
import './ListaUsuario.css'
import Usuario from '../../../models/Usuario'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { buscar } from '../../../services/Service';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

function ListaUsuario() {

    const [usuarios, setUsuario] = useState<Usuario[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useNavigate();

    useEffect(() => {
        if(token == '') {
            toast.info('Você precisa estar logado como administrador', {
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
        } else if(token != 'Basic a29zZXJza2lAZ21haWwuY29tOndhbjEyMw==') {
            toast.info('Você precisa estar logado como administrador', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
              });
              history('/home')
        }
    }, [token])

    async function getUsuario() {
        await buscar('/usuario/all', setUsuario, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getUsuario()
    }, [usuarios.length])

    return (
        <>
            {usuarios.map(usuario => (
                <Box m={2} >
                    <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {usuario.nome}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                        <Link to={`/home`} className="text-decorator-none">
                            <Box mx={1}>
                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                atualizar
                            </Button>
                            </Box>
                        </Link>
                        <Link to={`/home`} className="text-decorator-none">
                            <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                deletar
                            </Button>
                            </Box>
                        </Link>
                        </Box>
                    </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    );

}

export default ListaUsuario;