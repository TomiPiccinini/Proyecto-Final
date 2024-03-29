import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContainer, MatchImg, Detalles, Detalle } from "./styled";
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
          open={props.show}
          TransitionComponent={Grow}
          keepMounted
          onClose={props.handleCloseDetails}
          aria-describedby="alert-dialog-slide-description"
          className={classes.root}
        >
          <DialogTitle >{props.name.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            <DialogContainer className={classes.root} >
                    <MatchImg src={props.name.photoList[0].url} />
                    <h1>Detalles del producto</h1>
                    <p>Marca: {props.name.brand}</p>
                    <p>Descripción: {props.name.description}</p>
                    <p>Estado: {props.name.state}</p>
                    <p>Talle: {props.name.measure}</p>
                    <p>Tipo de Prenda: {props.name.tag}</p>
                  </DialogContainer>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleCloseDetails}>Cerrar</Button>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}