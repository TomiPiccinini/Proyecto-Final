import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContainer, MatchImg, Contenedor } from "./styled";
import { Grow } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
}));


export default function AlertDialogSlide(props) {
  const classes = useStyles();
  if (!props.show) {
    return null;
  }
  else {
    return (

      <div>

        <Dialog
          maxWidth='800px'
          open={props.show}
          TransitionComponent={Grow}
          keepMounted
          onClose={props.handleCloseMatchs}
          aria-describedby="alert-dialog-slide-description"
          className={classes.root}
        >
          <Contenedor>
            <div>
              <DialogTitle >{props.match.otherMedia.title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <DialogContainer className={classes.root} >
                    <MatchImg src={props.match.otherMedia.photoList[0].url} />
                    <p>Detalles del producto</p>
                    <p>Marca: {props.match.otherMedia.brand}</p>
                    <p>Descripción: {props.match.otherMedia.description}</p>
                    <p>Estado: {props.match.otherMedia.state}</p>
                    <p>Talle: {props.match.otherMedia.measure}</p>
                    <p>Tipo de Prenda: {props.match.otherMedia.tag}</p>
                  </DialogContainer>
                </DialogContentText>
              </DialogContent>
            </div>


            <div>
              <DialogTitle >{props.match.yourMedia.title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <DialogContainer className={classes.root} >
                    <MatchImg src={props.match.yourMedia.photoList[0].url} />
                    <p>Detalles del producto</p>
                    <p>Marca: {props.match.yourMedia.brand}</p>
                    <p>Descripción: {props.match.yourMedia.description}</p>
                    <p>Estado: {props.match.yourMedia.state}</p>
                    <p>Talle: {props.match.yourMedia.measure}</p>
                    <p>Tipo de Prenda: {props.match.yourMedia.tag}</p>
                  </DialogContainer>
                </DialogContentText>
              </DialogContent>
            </div>
          </Contenedor>
          <DialogActions>
            <Button onClick={props.handleCloseMatchs}>Cerrar</Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}