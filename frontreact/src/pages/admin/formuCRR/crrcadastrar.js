import React , {useState, Component} from 'react';
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
import {FileDropZone } from 'material-ui-dropzone'

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
  const [placa , setPlaca] = useState ('');
  const [guincheiro , setGuincheiro] = useState ('');
  const [pfxguincho , setPfxguincho] = useState ('');
  const [ft1 , setFt1] = useState ('');
  const [ft2 , setFt2] = useState ('');
  const [ft3 , setFt3] = useState ('');
  const [ft4 , setFt4] = useState ('');
  const [av1 , setAv1] = useState ('');
  const [av2 , setAv2] = useState ('');
  const [av3 , setAv3] = useState ('');
  const [av4 , setAv4] = useState ('');
  const [av5 , setAv5] = useState ('');  

  async function handleSubmit(){
    const data = {apreendido: apreendido, 
                  numcrr: numcrr, 
                  ftcrr: ftcrr, 
                  placa: placa, 
                  guincheiro: guincheiro, 
                  pfxguincho: pfxguincho, 
                  ft1: ft1, 
                  ft2: ft2, 
                  ft3: ft3, 
                  ft4: ft4,
                  av1: av1, 
                  av2: av2, 
                  av3: av3, 
                  av4: av4, 
                  av5: av5} 

    console.log (data)


    if(apreendido !==''&& numcrr !==''&& placa !=='' && 
    guincheiro !=='' && pfxguincho !=='' && pfxguincho !==''){

    const response = await api.post('/cadformulario/', data)

    if(response.status === 200){
      window.location.href='/admin/formularios/'
    }
    else{
      alert ('Erro ao cadastrar ou formulario já cadastrado !');
    }
  }else {
    alert('Por favor Preencher todos os dados');

  }
}

    const Input = styled('input')({
      display: 'none',
    });

    class Example extends React.Component {

      onFilesAdded = (files) => {
        console.log("files added!", files);
      }
    
      onFilesRejected = (files) => {
        console.log("files rejected!", files);
      }}
    

    
    return (
      <div className={classes.root}>
        
        <MenuAdmin title={'FORMULARIO CRR'}/>      
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
  
          <form> 
          
          <Container maxWidth="xl" className={classes.container}>
            
            <Grid container spacing={1}>
              <Grid item sm={12}>            
                      <Paper className = {classes.paper}>
                        <h2>Cadastro de Formulario de CRR</h2>
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
                        <Grid item xs={12} sm={4}>
                          <TextField
                            required
                            id="placa"
                            name="placa"
                            label="Placa: "
                            fullWidth
                            autoComplete="Placa"
                            value={placa}
                            onChange = { e => setPlaca (e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            required
                            id="guincheiro"
                            name="guincheiro"
                            label="Guincheiro: "
                            fullWidth
                            autoComplete=" Nome Guincheiro"
                            value={guincheiro}
                            onChange = { e => setGuincheiro (e.target.value)}
                          />
                        </Grid>      
                        <Grid item xs={12} sm={4}>
                          <TextField
                            required
                            id="pfxguincho"
                            name="pfxguincho"
                            label="Prefixo do Guincho: "
                            fullWidth
                            autoComplete="Prefixo Guincho"
                            value={pfxguincho}
                            onChange = { e => setPfxguincho (e.target.value)}
                          />
                        </Grid>
                        
                        <Grid item xs={12} sm={3}>
                          <Typography variant="h6">Foto CRR</Typography>
                          <div className={classes.root}>  
                          <label htmlFor="ftcrr">
                          <Input accept="image/*" className={classes.input} id="ftcrr" type="file" value={ftcrr} 
                                      onChange = { e => setFtcrr (e.target.ftcrr[0])} sx={{ visibility: 'none' }}/>
                            <IconButton color="default" 
                            aria-label="upload picture" 
                            component="span">
                            <PhotoCamera />
                            </IconButton>
                          </label>
                          </div>                               
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
  
  