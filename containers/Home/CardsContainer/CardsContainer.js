import React from "react";
import { Slide } from "react-awesome-reveal";
import CardsContainerWrapper from "./CardsContainerWrapper";

// const CardsContainer = () => {
//   return (

//   );
// };

// export default CardsContainer;

import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import transitions, { duration } from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    marginBottom: 20,
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  // polygon: {
  //   fill: theme.palette.common.white,
  //   stroke: theme.palette.divider,
  //   strokeWidth: 1,
  // },
}));

export default function SimpleZoom() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <CardsContainerWrapper>
      <div className={classes.root}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <div className={classes.container}>
          <h1>Cards</h1>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Users</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Todos</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Albums</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Users</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Todos</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Albums</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Users</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Todos</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
            <div className="col-sm-6 col-md-4">
              <Zoom in={checked}>
                <Paper elevation={4} className={classes.paper}>
                  <div className="p-4 rounded shadow">
                    <h2>Albums</h2>
                    <p>coca-cola</p>
                  </div>
                </Paper>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </CardsContainerWrapper>
  );
}
