import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Slider = () => {


  return (
<div
id="slider"
  style={{
    paddingBottom: '30px',
    position: 'relative',
  }}
>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className="carousel-container"
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    <img
      src="../assets/1.jpg"
      className="carousel-image"
    />
    <img
      src="../assets/2.avif"
      className="carousel-image"
    />
    <img
      src="../assets/3.avif"
      className="carousel-image"
    />
    <img
      src="../assets/4.avif"
      className="carousel-image"
    />
    <img
      src="../assets/5.avif"
      className="carousel-image"
    />
  </Carousel>
</div>
  );
};
export default Slider
