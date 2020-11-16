import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import { makeStyles, Typography } from "@material-ui/core";
import TodoForm from "./CRUD/TodoForm";
import TodoList from "./CRUD/TodoList";

const useStyles = makeStyles(() => ({
  carousel: {
    paddingTop: "100px",
  },
  price: {
    color: "white",
    fontSize: "50px",
    padding: "50px",
    fontFamily: "Josefin Sans",
  },
  text: {
    color: "white",
    padding: "50px 0px",
    // fontFamily: "Josefin Sans",
    paddingBottom: '50px',
    fontSize: "20px"
  },
  phone: {
    color: "white",
    fontSize: "30px",
    fontFamily: "Josefin Sans",
  },
  categories: {
    color: "white",
    fontSize: "20px",
    // fontFamily: "Josefin Sans",
  },
}));

const CarouselPage = () => {
  const classes = useStyles();

  return (
    <MDBContainer>
      <MDBCarousel
        style={{ width: "100%" }}
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner className={classes.carousel}>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://02.img.avito.st/640x480/9334045102.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://01.img.avito.st/640x480/9334045101.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://56.img.avito.st/640x480/9334045156.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <Typography className={classes.price}>12000 P</Typography>
      <Typography className={classes.phone}>89 600 499 068</Typography>
      <Typography className={classes.text}>
        продам Оригинальные диски mercedes Amg Monoblock r15. Состояние можете
        видеть по фото. Не гнутые, не варенные. Не бьют. Могу отправить
        транспортной. Подходят для w124, w202, w210.
      </Typography>
      <Typography className={classes.categories}>
        Состояние: б/у <br />
        Тип диска: литые <br /> Диаметр: 15 дюймов <br /> Ширина обода: 7 дюймов
      </Typography>
      <TodoList />
      <TodoForm />
    </MDBContainer>
  );
};

export default CarouselPage;
