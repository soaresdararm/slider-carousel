import React from "react";
import "./style.css";

interface CarouselItem {
  img: string;
  author: string;
  title: string;
  topic: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  currentIndex: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, currentIndex }) => {
  return (
    <div className="list">
      {items.map((item, index) => (
        <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
          <img src={item.img} alt={item.title} />
          <div className="content">
            <div className="author">{item.author}</div>
            <div className="title">{item.title}</div>
            <div className="topic">{item.topic}</div>
            <div className="des">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;