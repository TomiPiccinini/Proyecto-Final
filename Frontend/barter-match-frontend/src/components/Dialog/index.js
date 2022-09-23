import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DialogContainer , MatchImg} from "./styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  return (
    <div>
      
      <Dialog
        maxWidth='500px'
        open={props.name}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Hay match!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <DialogContainer>
              <MatchImg src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chaleco-capucha-zara-1616512088.jpg' />
              <MatchImg  src='https://images.squarespace-cdn.com/content/v1/579202971b631b5dbc741986/1547662669652-1OJ154T8EZOKIEEFZ0VQ/image-asset.octet-stream?format=500w'/>
           </DialogContainer>
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