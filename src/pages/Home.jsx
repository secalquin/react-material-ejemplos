import { Container, Divider, Paper } from "@mui/material";
import MuiGrid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10%",
  },
  paper: {
    display: "flex",
    padding: "10px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const content = (
    <div>
      {`El proposito de este proyecto es realizar pruebas, desarrollos y entrenar acerca de React.`}
    </div>
  );

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper variant="elevation" elevation={3} className={classes.paper}>
        <Grid container>
          <Grid item xs>
            {content}
          </Grid>
          <Divider orientation="vertical">Divider</Divider>
          <Grid item xs>
            {content}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
