"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

// ✅ Use public folder paths instead of imports
const images = [
  { image: "/images/burger.jpg", alt: "A delicious, juicy burger" },
  { image: "/images/curry.jpg", alt: "A delicious, spicy curry" },
  { image: "/images/dumplings.jpg", alt: "Steamed dumplings" },
  { image: "/images/macncheese.jpg", alt: "Mac and cheese" },
  { image: "/images/pizza.jpg", alt: "A delicious pizza" },
  { image: "/images/schnitzel.jpg", alt: "A delicious schnitzel" },
  { image: "/images/tomato-salad.jpg", alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          width={1200} // adjust size as needed
          height={600}
          className={`${classes.slide} ${
            index === currentImageIndex ? classes.active : ""
          }`}
          style={{ objectFit: "cover" }}
        />
      ))}
    </div>
  );
}
