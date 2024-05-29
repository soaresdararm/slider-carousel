// App.js
import React, { useState, useEffect } from "react";
import img1 from "../src/images/img1.jpg";
import img2 from "../src/images/img2.jpg";
import img3 from "../src/images/img3.jpg";
import img4 from "../src/images/img4.jpg";
import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";

function App() {
  const items = [
    {
      img: img1,
      author: "Dara Soares",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: img2,
      author: "Dara Soares",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: img3,
      author: "Dara Soares",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: img4,
      author: "Dara Soares",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
  ];

  const itemsThumbnail = [
    {
      img: img1,
      title: "DESIGN SLIDER",
      description: "Lorem ipsum dolor",
    },
    {
      img: img2,
      title: "DESIGN SLIDER",
      description: "Lorem ipsum dolor",
    },
    {
      img: img3,
      title: "DESIGN SLIDER",
      description: "Lorem ipsum dolor",
    },
    {
      img: img4,
      title: "DESIGN SLIDER",
      description: "Lorem ipsum dolor",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <Header />
      <div className="carousel">
        <Carousel items={items} currentIndex={currentIndex} />
        <Thumbnail items={itemsThumbnail} currentIndex={currentIndex} />
        <div className="arrows">
          <button id="prev" onClick={handlePrev}> {"<"} </button>
          <button id="next" onClick={handleNext}>{">"}</button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
}

export default App;
