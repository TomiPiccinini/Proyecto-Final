import * as React from 'react';
import history from "../../utils/history"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;
const navItems = [
  { title: 'INICIO', value: 'home' },
  { title: 'PERFIL', value: 'perfil' },
  { title: 'CHATS', value: 'chats' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
       
       '&:hover': {
        transform: 'scale(1.05)',
        transition: '0.5s',
        borderBottom: '2px solid white',
     }
      }
  }));
  const classes = useStyles();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        BarterMatch
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', fontWeight: 'bold' }} onClick={() => history.push(item.value)} key={item.title}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: 'flex', pb:2}}>
      <AppBar component="nav" sx={{bgcolor:'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => history.push("home")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor:'pointer', fontWeight: 'bold' }}
            
          >
            BarterMatch
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.title} sx={{ color: '#fff', fontWeight: 'bold',mr:2 }} onClick={() => history.push(item.value)}className={classes.root} >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
