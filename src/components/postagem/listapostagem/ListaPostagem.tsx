import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { buscar } from '../../../services/Service';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');

  let history = useNavigate();

  useEffect(() => {
    if(token == '') {
      alert('Você precisa estar logado')
      history('/login')
    }
  }, [token])

  async function getPostagem() {
    await buscar('/postagens', setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPostagem()
  }, [posts.length])

  return (
    <>
    {posts.map(post => (
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {post.tema?.tema}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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

export default ListaPostagem;