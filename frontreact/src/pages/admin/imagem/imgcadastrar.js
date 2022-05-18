import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import Typography  from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { styled } from '@mui/material/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width:'100%'
  }
  
}));


export default function CRRCadastrar() {

  const classes = useStyles();
 
  const [apreendido , setApreendido] = useState ('');
  const [numcrr , setNumcrr] = useState ('');
  const [ftcrr , setFtcrr] = useState ('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
 

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ftcrr', ftcrr);

    const headers = {
      'headers': {
        'Content-Type': 'application/rest'
      }
    }

    await api.post("/cadimagem/", formData, headers)
    .then((response) => {
      setStatus({
        type: 'success',
        mensagem: response.data.mensagem
      });
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem
        });
      }else{
        setStatus({
          type: 'error',
          mensagem: "Erro: Tente mais tarde!"
        });
      }
    });

  }

    const Input = styled('input')({
      display: 'none',
    });

    

    
    return (
      <div className={classes.root}>
        
        <MenuAdmin title={'IMAGEM  CRR'}/>      
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
  
          <form onSubmit={uploadImage}> 
          
          <Container maxWidth="xl" className={classes.container}>
            
            <Grid container spacing={1}>
              <Grid item sm={12}>            
                      <Paper className = {classes.paper}>
                        <h2>Cadastro de Imagem de CRR</h2>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="labelApreendido">Apreendido ? </InputLabel>
                              <Select 
                              labelId="labelApreendido" 
                              id="apreendido"
                              value={apreendido}
                              onChange = { e => setApreendido (e.target.value)}
                              >                            
                                <MenuItem value={1}>Apreendido</MenuItem>
                                <MenuItem value={0}>Não Apreendido</MenuItem>                            
                              </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            required
                            id="numcrr"
                            name="numcrr"
                            label="Numcrr: "
                            fullWidth
                            autoComplete="Numero CRR"
                            value={numcrr}
                            onChange = { e => setNumcrr (e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Typography variant="h6">Foto CRR</Typography>
                          <div className={classes.root}>  
                          
                          <Input accept="image/*" className={classes.input} id="ftcrr" type="file" value={ftcrr} 
                                      onChange = {e => setFtcrr (e.target.value)} sx={{ visibility: 'none' }}/>
                            <IconButton color="default" 
                            aria-label="upload picture" 
                            component="span">
                            <PhotoCamera />
                            </IconButton>
                         
                          </div>                               
                        </Grid>  
  
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={12}>
                          <Button variant="contained" type='submit' color="primary">
                            Salvar
                          </Button>   
                          </Grid>
                          </Grid>
                          </Grid>                
                          </Paper>                                                   
                          </Grid>
                          </Grid>                        
                            <Box pt={12}>
                                <Footer />
                            </Box>
                            
                            </Container>
  
                            </form>
                            </main>
                        </div>
                      );
                    }
  
  