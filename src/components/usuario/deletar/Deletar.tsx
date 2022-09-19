import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Box } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import { buscarId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Deletar.css'

function Deletar() {

    let history = useNavigate();
    const {id} = useParams<{id: string}>();
    const [user, setUser] = useState<Usuario>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if(token == '') {
          toast.info('Você precisa estar logado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
          });
          history('/posts')
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined) {
          findById(id)
        }
      }, [id])

    async function findById(id: string) {
        buscarId(`/usuario/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history('/usuarios')
        deleteId(`/usuario/${id}`, {
          headers: {
            'Authorization': token
          }
        });
        toast.success('Postagem deletada com sucesso', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined
        });
    }

    function nao() {
        history('/usuarios')
    }

    return(
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                            Deseja deletar seguinte usuário:
                        </Typography>
                        <Typography color="textSecondary" >
                            {user?.nome} - email: {user?.email}
                        </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                        <Box mx={2}>
                            <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                Sim
                            </Button>
                        </Box>
                        <Box>
                            <Button onClick={nao} variant="contained" size='large' color="secondary">
                                Não
                            </Button>
                        </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default Deletar;