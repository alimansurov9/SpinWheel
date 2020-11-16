import { MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  imgbtn: {
    width: "300px",
    height: "200px",
    margin: "20px",
  },
  header: {
    paddingTop: "100px",
  },
  view: {
    width: "301px",
    height: "201px",
  },
  imgText: {
    color: "white"
  }
}));

export default function Eclass() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MDBContainer>
      <div className={classes.header}></div>
      <MDBRow>
        <a>
          <img
            onClick={() => history.replace("/w124")}
            className={classes.imgbtn}
            src="https://avtoexperts.ru/wp-content/uploads/2020/06/mercedes-benz_500_e.jpg"
          ></img>
          <p className={classes.imgText}>W124</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://www.kolesa.ru/uploads/bnnews/2015/06/02/8589922cff48f561ea6cf48a6c1548aa.jpg"
          ></img>
          <p className={classes.imgText}>W210</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://blamper.ru/steady/53/35/96/original/533596d8fa1ad9e25088987e/568x390_kak-rabotaet-sistema-oblegcheniya-posadki-i-vyhoda-v-mercedes-e-class-w211.jpg"
          ></img>
          <p className={classes.imgText}>W211</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://blamper.ru/steady/53/56/6d/original/53566d70fa1ad907568b47e6/568x390_vidy-podveski-mercedes-e-class-w212-i-vysota-klirensa.jpg"
          ></img>
          <p className={classes.imgText}>W212</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://i.infocar.ua/i/12/4696/1400x936.jpg"
          ></img>
          <p className={classes.imgText}>W213</p>
        </a>
      </MDBRow>
    </MDBContainer>
  );
}
