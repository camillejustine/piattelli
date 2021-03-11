import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import placeholder from "../../assets/carouselPH.png";

const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
  <img src={placeholder} onDragStart={handleDragStart} alt="placeholder" />,
];

function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoWidth={true}
      autoPlay={true}
      autoPlayInterval={5000}
      infinite={true}
      disableDotsControls={true}
    />
  );
}

export default Carousel;
