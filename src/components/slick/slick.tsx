import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

export const SlickSlider = ({
  children,
  slideToShow,
  slidesToScroll,
}: {
  children: React.ReactNode;
  slideToShow: number;
  slidesToScroll: number;
}) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: slideToShow,
    slidesToScroll: slidesToScroll,
    variableWidth: true,
  };
  return <Slider {...settings}>{children}</Slider>;
};
