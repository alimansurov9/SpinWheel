import { MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { makeStyles  } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    paddingTop: "100px"
  },
  imgbtn: {
    width: "200px",
    height: "200px",
    margin: "20px",
    borderRadius: "10px",
    marginLeft: "110px"
  },
  imgText: {
    color: "white"
  }
}));

export default function Engine() {
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <MDBContainer>
      <div className={classes.header}></div>
      <MDBRow>
        <a>
          <img
            onClick={() => history.replace("/m102")}
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/m102/dvigatel-mercedes-m102-foto.jpg"
          ></img>
          <p className={classes.imgText}>m102</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/m111/dvigatel-mercedes-m111-foto.jpg"
          ></img>
          <p className={classes.imgText}>m111</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/m103/dvigatel-mercedes-m103-foto.jpg"
          ></img>
          <p className={classes.imgText}>m103</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/m104/dvigatel-mercedes-m104-foto.jpg"
          ></img>
          <p className={classes.imgText}>m104</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/m119/dvigatel-mercedes-m119-v-razreze.jpg"
          ></img>
          <p className={classes.imgText}>m119</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://yourmotor.ru/wp-content/uploads/2019/03/om601.jpg"
          ></img>
          <p className={classes.imgText}>om601</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/om602/dvigatel-mercedes-om602.jpg"
          ></img>
          <p className={classes.imgText}>om602</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/om603/dvigatel-mercedes-om603-foto.jpg"
          ></img>
          <p className={classes.imgText}>om603</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/om604/dvigatel-mercedes-om604-foto.jpg"
          ></img>
          <p className={classes.imgText}>om604</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/om605/dvigatel-mercedes-om605.jpg"
          ></img>
          <p className={classes.imgText}>om605</p>
        </a>
        <a>
          <img
            className={classes.imgbtn}
            src="https://otoba.ru/dvigatel/mercedes/img/om606/dvigatel-mercedes-om606.jpg"
          ></img>
          <p className={classes.imgText}>om606</p>
        </a>
      </MDBRow>
    </MDBContainer>
  );
}
