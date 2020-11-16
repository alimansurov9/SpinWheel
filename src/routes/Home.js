import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import "../App.css";
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
import TodoList from '../components/CRUD/TodoList';
import TodoForm from '../components/CRUD/TodoForm';
import { useHistory } from "react-router-dom";

// import ProductList from '../components/ProductList'


// const BackgroundImagePage = () => {
//   return <div className="bg" />;
// };

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

const SocialButtonsPage = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const history = useHistory();


  useEffect(() => {
    const index = Math.floor(Math.random() * images.length);
    setCurrentImage(images[index]);
  }, []);
  return (
    <>
      <div
        className="bg"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>

      <MDBContainer style={{ paddingTop: "50px", borderRadius: "10px" }}>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1514723432099-9f0d4906e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1594148664012-dd43c4fcb651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1544098068-de931a803fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBCard style={{ backgroundColor: "#ffbb33" }} className="my-5 px-5 pb-5">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Лента
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://static.baza.drom.ru/drom/1599795324229_bulletin"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="green-text">
                  <h6 className="font-weight-bold mb-3">Двигатели</h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>
                    Двигатель + акпп + кондиционер на Mercedes W201 m102 в
                    Находке
                  </strong>
                </h3>
                <p>
                  Двигатель M102 m102 102962 Акпп 722,400 722400 722.400 Номер
                  кузова WDB2010241F996088 Модель 201.024 190 E AUSTRALIA
                  Двигатель 102.962 12 174941 Трансмиссия 722.400 03 214019
                  двигатель в сборе, вместе со всем навесным (стартер,
                  генератор, насос г/у, компрессор кондиционера и т.д.) - блок
                  управления ДВС - электропроводка - блок управления АКПП -
                  документы на двигатель(ГТД) -все радиаторы -печка в сборе
                  Пробег 119 000 км.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong> AMG Japan Trade </strong>
                  </a>
                  || 165 000 P
                </p>
                <MDBBtn color="success" size="md" className="waves-light ">
                  Подробнее
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="pink-text">
                  <h6 className="font-weight-bold mb-3">
                    Колеса, шины и диски
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Диски для Mercedes Amg r15</strong>
                </h3>
                <p>
                  продам Оригинальные диски mercedes Amg Monoblock r15.
                  Состояние можете видеть по фото. Не гнутые, не варенные. Не
                  бьют. Могу отправить транспортной. Подходят для w124, w202,
                  w210.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong> Nick </strong>
                  </a>
                  || 12 000 P
                </p>
                <MDBBtn
                  onClick={() => history.replace("/news")}
                  color="pink"
                  size="md"
                  className="mb-lg-0 mb-4 waves-light"
                >
                  Read more
                </MDBBtn>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://02.img.avito.st/640x480/9334045102.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://a.d-cd.net/I1QAAgH9T-A-960.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                  <h6 className="font-weight-bold mb-3">
                    
                    Ходовая часть
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Замена редуктора</strong>
                </h3>
                <p>
                  Вскрыв свой редуктор и поняв, что чинить его смысла особого
                  нет, я воспользовался своим Планом Б, и позвонил по
                  единственному объявлению с редуктором 3,27 в Челябинске. Цена
                  за него была совсем низкая — всего 2000 рублей (средняя цена
                  на подобный редуктор — около 5 тысяч рублей) и я ожидал, что
                  он окажется с каким-нибудь значимым дефектом. Но даже в этом
                  случае я бы его купил, если бы у него был целым всего лишь
                  фланец хвостовика. Тогда я бы собрал из двух редукторов один.
                  Цена на новый фланец начинается от 5000 рублей, и еще точно
                  неизвестно, подойдет ли мне такой. Так что покупка редуктора
                  была оправдана в любом случае.
                </p>
                <p>
                  by
                  <a href="#!">
                    <strong> Robert777 </strong>
                  </a>
                  || 2650 P
                </p>
                <MDBBtn color="indigo" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        {/* <TodoForm />
        <TodoList /> */}
        {/* <ProductList/> */}
      </MDBContainer>
    </>
  );
};

export default SocialButtonsPage;
