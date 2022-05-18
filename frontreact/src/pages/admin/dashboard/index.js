import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ImgAdmin from '../../../assets/img/servisGR.png'
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 12, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'flex',
    justifyContent: 'flex',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(0),
    display: 'center',
    overflow: 'auto',
    flexDirection: 'center',
  },
  
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>     
      <MenuAdmin title={'DASHBOARD'}/>      
      <main className={classes.content} align="center">
        <div className={classes.appBarSpacer} align="center"/>
        <Container align="center" style ={{ display: 'center', justifyContent: 'center'}} className={classes.container}>
        
          <Box pt={12} align="center">

            <Grid align="center" container spacing={0}>
            <img align="center" sx={{display: "center", justifyContent: "center"}} style={{ width: "100%", height: "100%" }} src={ImgAdmin} />  
                    
          </Grid>

          <Footer pt={12}/>

          </Box>
        </Container>
      </main>
    </div>
  );
}