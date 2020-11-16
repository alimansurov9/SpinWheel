// import React from "react";
import { MDBCol, MDBContainer, MDBTypography } from "mdbreact";
import { makeStyles } from "@material-ui/core";
import mercedes from "./images/logos/mercedes.png";
import audi from "./images/logos/audi.jpg";
import bmw from "./images/logos/bmw.jpg";
import ford from "./images/logos/ford.webp";
import honda from "./images/logos/honda.png";
import hyundai from "./images/logos/hyundai.jpg";
import kia from "./images/logos/kia.jpg";
import nissan from "./images/logos/nissan.png";
import opel from "./images/logos/opel.png";
import renault from "./images/logos/renault.png";
import subaru from "./images/logos/subaru.png";
import suzuki from "./images/logos/suzuki.png";
import toyota from "./images/logos/toyota.png";
import volkswagen from "./images/logos/volkswagen.jpg";
import volvo from "./images/logos/volvo.jpg";
import React, { useEffect, useState } from "react";
import bg1 from "../components/images/bgimages/bg1.jpg";
import bg2 from "../components/images/bgimages/bg2.jpg";
import bg3 from "../components/images/bgimages/bg3.jpg";
import bg4 from "../components/images/bgimages/bg4.jpg";
import bg5 from "../components/images/bgimages/bg5.jpg";
import bg6 from "../components/images/bgimages/bg6.jpg";
import bg7 from "../components/images/bgimages/bg7.jpg";
import bg8 from "../components/images/bgimages/bg8.jpg";
import bg9 from "../components/images/bgimages/bg9.jpg";
import bg10 from "../components/images/bgimages/bg10.jpg";
import bg11 from "../components/images/bgimages/bg11.jpg";
import bg12 from "../components/images/bgimages/bg12.jpg";
import bg13 from "../components/images/bgimages/bg13.jpg";
import bg14 from "../components/images/bgimages/bg14.jpg";
import bg15 from "../components/images/bgimages/bg15.jpg";
import bg16 from "../components/images/bgimages/bg16.jpg";
import { useHistory } from "react-router-dom";

const images = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
  bg15,
  bg16,
];

const useStyles = makeStyles(() => ({
  inp: {
    // paddingTop: "100px"
  },
  top: {
    marginTop: "65px",
  },
  logo: {
    width: "100px",
    height: "100px",
    margin: "10px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  bgcatalog: {
    width: "100%",
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  headerText: {
    color: "white",
    fontFamily: "Staatliches",
  },
  container: {
    marginBottom: "100px"
  },
  col: {
    marginBottom: "300px"
  }
}));

const CardExample = () => {
  const classes = useStyles();

  const history = useHistory();

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }, []);

  return (
    <>
      <img
        className={classes.bgcatalog}
        style={{ backgroundImage: `url(${currentImage})` }}
      ></img>
      <MDBContainer className={classes.container}>
        <MDBTypography className={classes.headerText} tag="h1">
          Выберите марку авто
        </MDBTypography>
        <MDBCol className={classes.col}>
          <p>
            <a onClick={() => history.replace("/audi")}>
              <img className={classes.logo} src={audi}></img>
            </a>
            <a>
              <img className={classes.logo} src={bmw}></img>
            </a>
            <a>
              <img className={classes.logo} src={ford}></img>
            </a>
            <a>
              <img className={classes.logo} src={honda}></img>
            </a>
            <a onClick={() => history.replace("/cars")}>
              <img className={classes.logo} src={mercedes}></img>
            </a>
            <a>
              <img className={classes.logo} src={hyundai}></img>
            </a>
            <a>
              <img className={classes.logo} src={kia}></img>
            </a>
            <a>
              <img className={classes.logo} src={nissan}></img>
            </a>
            <a>
              <img className={classes.logo} src={opel}></img>
            </a>
            <a>
              <img className={classes.logo} src={renault}></img>
            </a>
            <a>
              <img className={classes.logo} src={subaru}></img>
            </a>
            <a>
              <img className={classes.logo} src={suzuki}></img>
            </a>
            <a>
              <img className={classes.logo} src={toyota}></img>
            </a>
            <a>
              <img className={classes.logo} src={volkswagen}></img>
            </a>
            <a>
              <img className={classes.logo} src={volvo}></img>
            </a>
          </p>
        </MDBCol>
      </MDBContainer>
    </>
  );
};

export default CardExample;
