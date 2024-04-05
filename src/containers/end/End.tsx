import style from "./style.module.css";
import Carousel from "react-bootstrap/Carousel";
import RAQUETES from "../../raquetes";

const End = () => {
  return (
    <div className={style.container}>
      <h2 className="mt-5">Game,set and match!</h2>
      <h3>Nossas recomendações para você:</h3>
      <Carousel fade className="d-flex">
        <Carousel.Item className="d-flex mb-5 justify-content-center ">
          <img className="" src={RAQUETES[0].modelos[0].img} />
          <Carousel.Caption className=""></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex mb-5 justify-content-center ">
          <img className="" src={RAQUETES[1].modelos[0].img} />
          <Carousel.Caption className=""></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="d-flex mb-5 justify-content-center">
          <img className="" src={RAQUETES[2].modelos[0].img} />
          <Carousel.Caption className=""></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default End;
