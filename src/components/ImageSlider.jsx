import { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const length = SliderData.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
        <span className={styles.slidesContainer}>
            <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
            {SliderData.map((slide, index) => {
                return (
                <div
                    className={index === current ? styles.slide_active : styles.slide}
                    key={index}
                >
                    {index === current && <img src={slide.img} alt="Closet Picture" />}
                </div>
                );
            })}
            <FaArrowAltCircleRight
                className={styles.right_arrow}
                onClick={nextSlide}
            />
      </span>
    </section>
  );
};

export default ImageSlider;
