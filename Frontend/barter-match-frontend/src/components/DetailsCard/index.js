import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContainer, MatchImg } from "./styled";
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
  console.log(props)
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
          <DialogTitle >{props.name.titulo}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <DialogContainer className={classes.root} >
                <MatchImg src={props.name.url} />
                <p>Detalles del producto</p>
                <p>Marca: {props.name.marca}</p>
                <p>Descripción: {props.name.descripcion}</p>
                <p>Estado: {props.name.condicion}</p>
                <p>Talle: {props.name.talle}</p>
                <p>Tipo de Prenda: {props.name.categoria}</p>
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