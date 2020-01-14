
import React from "react";
/**  este cara, servirá para injetamos um CSS customizado dentro nosso componente principal
 e com ela podemos pegar informalçoes do Material UI e assim criar algumas classes CSS*/
 import { withStyles } from "@material-ui/core/styles";
 import MoreVertIcon from "@material-ui/icons/MoreVert";
 import SearchIcon from '@material-ui/icons/Search';
 import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
 import ImageIcon from "@material-ui/icons/Image";
 import WorkIcon from "@material-ui/icons/Work";
 import BeachAccessIcon from "@material-ui/icons/BeachAccess";
 
 import {
   Paper,
   Typography,
   Input,
   Grid,
   Card,
   CardHeader,
   CardContent,
   Avatar,
   List,
   ListItem,
   ListItemText,
   IconButton
 } from "@material-ui/core";

/**
 * Montaremos nosso estilo utilizando uma Arrow Function que
 * irá retornar um objeto (no caso, as nossas classes)
 */

 const GlobalStyles = () => ({
  root: {
    padding: "50px 100px",
    zIndex: 999,
    position: "absolute"
  },
  card: {
    display: "flex",
    height: "calc(100vh - 100px)"
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0
  },
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#232F3E"
  },
  rightContainer: {
    background:
      "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
    flex: 1
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    background: "#9de1fe",
    padding: 20
  },
  information: {
    color: "#444"
  }
});



/**
 * Seguiremos com component Grid, um sistema de colunas que 
 * vai de 1 a 12 representando a porcentagem de uma div.
 */

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);




/** Teremos dois componentes principais chamado de Card 
 * que no caso é os LeftContainer e RightContainer.
 * 
 * Criamos também um lista falso de informações para mostrar em
 * tela.
 */

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

 /**
  * Temos propriedades como xs, sm, md, lg, xl, assim você pode
  * configurar para que em telas grandes seja representada por 6 colunas
  * e nas pequenas 12
  */

  /** Arrumar o layout do buscar e do input , e o mais add */
 const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          L
        </Avatar>
        
      }
      title="Nome do repositorio do responsável"
    />
    
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subheader">
        <SearchIcon />
        <Input type="text" />
        <AddCircleOutlineIcon type="button" />
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);


/**
 * Os Grid que representa a porcentagem de 3 colunas do nosso 
 * Grid "container". Os demais componentes são todos do Material UI que
 * possuem várias propriedades
 */

const RightContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Nome do projeto"
    />
    <CardContent className={[classes.rightContainer, classes.content]} />
  </Grid>
);



export default withStyles(GlobalStyles)(App);
