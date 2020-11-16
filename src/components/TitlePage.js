import React, { useEffect, useState } from "react";
import SpinWheel from "./images/wheel.png"
import bg1 from "./images/bgimages/bg1.jpg";
import bg2 from "./images/bgimages/bg2.jpg";
import bg3 from "./images/bgimages/bg3.jpg";
import bg4 from "./images/bgimages/bg4.jpg";
import bg5 from "./images/bgimages/bg5.jpg";
import bg6 from "./images/bgimages/bg6.jpg";
import bg7 from "./images/bgimages/bg7.jpg";
import bg8 from "./images/bgimages/bg8.jpg";
import bg9 from "./images/bgimages/bg9.jpg";
import bg10 from "./images/bgimages/bg10.jpg";
import bg11 from "./images/bgimages/bg11.jpg";
import bg12 from "./images/bgimages/bg12.jpg";
import bg13 from "./images/bgimages/bg13.jpg";
import bg14 from "./images/bgimages/bg14.jpg";
import bg15 from "./images/bgimages/bg15.jpg";
import bg16 from "./images/bgimages/bg16.jpg";
import { Link } from "react-router-dom";

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

export default function TitlePage() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }, []);

  return (
    <div>
      <header
        className="App-header"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <img
          src={SpinWheel}
          className="App-logo"
          alt="logo"
        />
        <p></p>
        
        <Link className="App-link" to="/">
          SpinWheel
        </Link>
      </header>
    </div>
  );
}
