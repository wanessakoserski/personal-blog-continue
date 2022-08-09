import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from '../../../models/Postagem';
import { buscarId, deleteId } from '../../../services/Service';
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Deletar.css';

function Deletar() {

  let history = useNavigate();
  const {id} = useParams<{id: string}>();
  const [post, setPost] = useState<Postagem>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if(token == '') {
      alert('Você precisa estar logado')
      history('/posts')
    }
  }, [token])

  useEffect(() => {
    if(id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscarId(`/postagens/${id}`, setPost, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history('/posts')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Tema deletado com sucesso');
  }

  function nao() {
    history('/posts')
  }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
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