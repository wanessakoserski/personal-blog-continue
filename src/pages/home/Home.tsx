import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from '../../components/postagem/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagem/modal/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
  }, [token])

    return (
      <>
        <Grid
          container
          direction="row"
          alignItems="center"
          className='home-main'
        >
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography
                variant="h3"
                align='center'
                className="title"
              >
                Você está no nosso diário virtual &lt;3
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className='message'
              >
               
              </Typography>
            </Box>
            <Box className='button-main'>
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Button variant="outlined" className='button'>
                  Feed
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <img
              src="https://i.imgur.com/GpiXn1q.png"
              alt=""
              width="500px"
              height="500px"
            />
          </Grid>
          <Grid xs={12} className='postagens'>
            <TabPostagem />
          </Grid>
        </Grid>
      </>
    );
}

export default Home;