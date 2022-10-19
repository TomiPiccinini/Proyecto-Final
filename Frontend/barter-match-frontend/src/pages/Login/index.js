import React from 'react'
import { Container, Wrapper } from './styled'
import { Box, TextField,Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import history from "../../utils/history"
import { loginstyles } from './loginstyles.css'
const Login = () => {

  return (
    <Wrapper>
      <Container>
        
        <Box
            component="form"
            sx={{
                height:'500px',
                width:'500px',
                padding: '20px',
                borderRadius: '20px',
                backgroundColor: 'white',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                textAlign: 'center',
                
            }}
            noValidate
            autoComplete="off"
        >
          <Typography variant="h4" fontWeight="bold" style={{margin: '10px' , color:'black'}}>Login</Typography>
            <div style={{color: '#ffffff',display:'flex', flexDirection:'column' , width:'100%'}}>
                
                    <TextField
                    required
                    id="Usuario"
                    label="Usuario"
                    variant="filled"
                    sx={{width:'100%'
                      
                    }}
                    />
                    <TextField
                    required
                    id="Password"
                    label="Password"
                    variant="filled"
                    />
                    <Button style={{marginLeft:"10px",marginTop:'25px', backgroundColor:'#9198e5'}}  variant="contained" component="label" onClick={() => history.push("home")}>
                            Send 
                    </Button>
               <a href="#"><Typography fontWeight="bold" style={{margin: '10px' , color:'light-blue'}}>Forgot password?</Typography></a>   
              </div>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default Login