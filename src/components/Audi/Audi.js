import { makeStyles } from "@material-ui/core";
import { MDBBtn, MDBContainer, MDBRow, MDBTypography } from "mdbreact";
// import React from "react";
import React, { useEffect, useState } from "react";
import bg1 from "../images/bgimages/bg1.jpg";
import bg2 from "../images/bgimages/bg2.jpg";
import bg3 from "../images/bgimages/bg3.jpg";
import bg4 from "../images/bgimages/bg4.jpg";
import bg5 from "../images/bgimages/bg5.jpg";
import bg6 from "../images/bgimages/bg6.jpg";
import bg7 from "../images/bgimages/bg7.jpg";
import bg8 from "../images/bgimages/bg8.jpg";
import bg9 from "../images/bgimages/bg9.jpg";
import bg10 from "../images/bgimages/bg10.jpg";
import bg11 from "../images/bgimages/bg11.jpg";
import bg12 from "../images/bgimages/bg12.jpg";
import bg13 from "../images/bgimages/bg13.jpg";
import bg14 from "../images/bgimages/bg14.jpg";
import bg15 from "../images/bgimages/bg15.jpg";
import bg16 from "../images/bgimages/bg16.jpg";
import audi1 from "../Audi/audi1.jpg";
import audi2 from "../Audi/audi2.jpg";
import audi3 from "../Audi/audi3.jpg";

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

const BgI = [audi1, audi2, audi3];

const useStyles = makeStyles(() => ({
  btn: {
    width: "200px",
    borderRadius: "10px",
    fontFamily: "Turret Road",
  },
  backgnd: {
    borderRadius: "10px",

    marginBottom: "200px",
  },
  headerText: {
    // marginTop: "100px",
    color: "white",
  },
  bgcatalog: {
    width: "100%",
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Mercedes() {
  const classes = useStyles();
  const history = useHistory();

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }, []);

  const [currentBgI, setCurrentBgI] = useState(BgI[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * BgI.length);
    setCurrentBgI(BgI[index]);
  }, []);

  return (
    <>
      <div
        className={classes.bgcatalog}
        style={{ backgroundImage: `url(${currentBgI})` }}
      ></div>
      <MDBContainer>
        {/* <div style={{ height: "100px" }}></div> */}
        <MDBRow>
         
          <MDBTypography className={classes.headerText} tag="h1">
            AUDI
          </MDBTypography>
          <MDBContainer
            className={classes.backgnd}
            style={{ backgroundImage: `url(${currentImage})` }}
          >
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              100
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              100 Avant
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              200
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              80
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              90
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A1
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A1
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A2
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A3
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A3 Sedan
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A3 Sportback
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A4
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A4 Allroad
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A4 Avant
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A4 Cabriolet
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A5
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A5 Sportback
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A6
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A6 Avant
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A7 Sportback
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              A8
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Allroad
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Cabriolet
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Coupe
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Q3
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Q5
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Q7
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              Q8
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              R8
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              RS Q3
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              RS3
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              RS4
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              RS5
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              RS6
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              S3
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              S4
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              S5
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              S6
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              S8
            </MDBBtn>
            <MDBBtn className={classes.btn} rounded color="grey darken-1">
              TT
            </MDBBtn>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
