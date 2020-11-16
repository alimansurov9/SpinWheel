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
    marginTop: "100px",
    color: "white"
  }
  
}));

export default function Mercedes() {
  const classes = useStyles();
  const history = useHistory();

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }, []);

  return (
    <MDBContainer>
      {/* <div style={{ height: "100px" }}></div> */}
      <MDBRow>
      <MDBTypography className={classes.headerText} tag="h1">
            MERCEDES-BENZ
          </MDBTypography>
        <MDBContainer
          className={classes.backgnd}
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            190 (W201)
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            A-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            B-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            C 63 AMG
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            C-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            C-class Coupe
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            C-class Estate
          </MDBBtn>

          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            CL
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            CLA
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            CLK
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            CLS
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            E 55 AMG
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            E 63 AMG
          </MDBBtn>
          <MDBBtn onClick={() => history.replace("/eclass")} className={classes.btn} rounded color="grey darken-1">
            E-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            E-class Coupe
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            E-class Estate
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            G 55 AMG
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            G-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GLA-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GLC-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GL-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GLE-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GLK-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            GLS
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            MB100
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            M-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            ML 63 AMG
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            R-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            SEC-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            SE-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            SL-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            SLK
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            Sprinter
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            T1
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            T2
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            V-class
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            Viano
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            Vito
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            W115
          </MDBBtn>
          <MDBBtn className={classes.btn} rounded color="grey darken-1">
            W123
          </MDBBtn>
        </MDBContainer>
      </MDBRow>
    </MDBContainer>
  );
}
