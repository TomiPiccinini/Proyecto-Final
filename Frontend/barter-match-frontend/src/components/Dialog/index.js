import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  return (
    <div>
      
      <Dialog
        open={props.name}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Matcheaste"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Acabas de matchear con X
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cerrar</Button>
          <Button onClick={props.handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}