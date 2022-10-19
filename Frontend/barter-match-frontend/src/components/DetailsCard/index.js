import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContainer , MatchImg} from "./styled";
import { Grow } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
  root: {
     display:'flex',
     flexDirection:'column',
    
    }
}));


export default function AlertDialogSlide(props) {
  const classes = useStyles();
  return (
    <div>
      
      <Dialog
        maxWidth='1000px'
        open={props.open}
        TransitionComponent={Grow}
        keepMounted
        onClose={props.handleCloseDetails}
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle>{props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <DialogContainer className={classes.root} >
              <MatchImg src={props.image} />
              <p>Detalles del producto</p>
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